<template>
    <div>
        <!--退出按钮 -->
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    logout () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style>

</style>
