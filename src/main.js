import Vue from "vue";
import App from "./app.vue";

new Vue({
  el:'#app',
  data: {
    info: "test"
  },
  render: h=> h(App),
  created()
  {
    console.log(App.data().test);
    App.methods.login_show()
  }
})
console.log("test");