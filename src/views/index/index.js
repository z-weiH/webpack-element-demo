import App from "./index.vue";
import Vue from "vue";
import { Button, Select } from 'element-ui';
Vue.use(Button);
Vue.use(Select);
new Vue({
    el: "#root",
    /*store,*/
  render: h => h(App)
});

alert('项目初始化成功');
