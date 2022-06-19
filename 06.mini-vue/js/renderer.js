// 声明一个h函数
const h = (tag, props, children) => {
    return {
        tag,
        props,
        children
    }
}

// 声明一个mount函数
const mount = (vnode, container) => {
    // 1.用vnode生成真实DOM(生成的真实DOM保存到vnode中，方便后面patch使用)
    const el = vnode.el = document.createElement(vnode.tag)

    // 2.处理标签属性
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key]
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLocaleLowerCase(), value)
            } else {
                el.setAttribute(key, value)
            }
        }
    }

    // 3.处理标签体内容
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children
        } else {
            vnode.children.forEach(item => {
                mount(item, el)
            });
        }
    }

    // 4.将el挂载到container中
    container.appendChild(el)
}

// 声明一个patch函数
const patch = (n1, n2) => {
    // 如果不是相同类型的元素，则直接替换
    if (n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement
        n1ElParent.removeChild(n1.el)
        mount(n2, n1ElParent)
    } else {
        // 1.取出element对象，并且在n2上也保留一份
        const el = n2.el = n1.el

        // 2.处理新旧props
        const oldProps = n1.props || {}
        const newProps = n2.props || {}
        // 2.1 获取所有的newProps并添加到el
        for (const key in newProps) {
            const oldValue = oldProps[key]
            const newValue = newProps[key]

            if (newValue !== oldValue) {
                if (key.startsWith("on")) {
                    el.addEventListener(key.slice(2).toLowerCase(), newValue)
                } else {
                    el.setAttribute(key, newValue);
                }
            }
        }

        // 2.2 删除旧的props
        for (const key in oldProps) {
            if (key.startsWith('on')) {
                const value = oldProps[key]
                el.removeEventListener(key.slice(2).toLocaleLowerCase(), value)
            }
            if (!(key in newProps)) {
                el.removeAttribute(key)
            }
        }

        // 3.处理新旧children
        const oldChildren = n1.children || []
        const newChildren = n2.children || []
        // 3.1 如果newChildren是string
        if (typeof newChildren === 'string') {
            if (typeof oldChildren === 'string') {
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren
                }
            } else {
                el.textContent = newChildren
            }
        } else {  // 3.2 如果newChildren是一个数组
            // 1.前面有相同节点的元素进行patch操作
            const commonLength = Math.min(oldChildren.length, newChildren.length)
            for (let i = 0; i < commonLength; i++) {
                patch(oldChildren[i], newChildren[i])
            }

            // 2.newChildren.length > oldChildren.length，做添加操作
            // oldChildren: [v1, v2, v3]
            // newChildren: [v1, v2, v3, v4, v5]
            if (newChildren.length > oldChildren.length) {
                newChildren.slice(oldChildren.length).forEach(item => {
                    mount(item, el)
                })
            }

            // 3.newChildren.length < oldChildren.length
            // oldChildren: [v1, v2, v3, v4, v5]
            // newChildren: [v1, v2, v3]
            if (newChildren.length < oldChildren.length) {
                oldChildren.slice(newChildren.length).forEach(item => {
                    el.removeChild(item.el)
                })
            }
        }
    }
}