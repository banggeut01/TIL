import Vue from 'vue' // vue 자체를 불러옴
import App from './App.vue' // 내가 만든 vue 파일

new Vue({
    el: '#app', 
    // 렌더링
    render: function(createElement) {
        return createElement(App)
    }
})