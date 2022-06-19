class Dep {
    constructor() {
        this.subscribes = new Set()
    }

    depend () {
        if (activeEffect) {
            this.subscribes.add(activeEffect)
        }
    }

    notify () {
        this.subscribes.forEach(effect => {
            effect()
        })
    }
}

let activeEffect = null
function watchEffect (effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}

const targetMap = new WeakMap()
function getDep (target, key) {
    // 根据对象(target)取出对应的Map对象
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }

    // 取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep()
        depsMap.set(key, dep)
    }
    return dep
}

// Object.defineProperty对数据进行劫持
function reactive (raw) {
    Object.keys(raw).forEach(key => {
        const dep = getDep(raw, key)
        let value = raw[key]

        Object.defineProperty(raw, key, {
            get () {
                dep.depend()
                return value
            },
            set (newValue) {
                if (value !== newValue) {
                    value = newValue
                    dep.notify()
                }
            }
        })
    })

    return raw
}

const info = reactive({ counter: 100, name: 'Bpoi' });
const foo = reactive({ height: 170 });

watchEffect(function () {
    console.log("effect1:", info.counter * 2, info.name);
})

watchEffect(function () {
    console.log("effect2:", info.counter * info.counter);
})

watchEffect(function () {
    console.log("effect3:", info.counter + 10, info.name);
})

watchEffect(function () {
    console.log("effect4:", foo.height);
})

// info.counter++;
foo.height = 180