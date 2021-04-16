<template>
  <div>
    <h1>hello , this is app vue !</h1>
    <h2 v-text="test"></h2>
  </div>
</template>
<script>
export default {
  // 注意：组件中的 data 必须是 function
  data()
  {
    return {
      test: "测试传输"
    }
  },
  methods: {
    login_show()
    {
      console.log("我是login.vue中的login_show方法...")
    }
  }
}
</script>
<style>
body{color:red;}
</style>