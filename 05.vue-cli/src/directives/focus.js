/**
* create user: zhanpengwei
* create date: 2022-06-16
* desc: 自动聚焦
*/
export default function registerFocus (app) {
    app.directive("focus", {
        mounted (el) {
            el.focus();
        },
    });
}