<template>
  <h1>Home page..</h1>
</template>

<script>
export default {
  created() {
    // actions 실행: this.$store.dispatch('모듈 이름/실행시킬 actions 이름')
    // this.$store.dispatch('workspace/createWorkspace')
    this.$store.dispatch('workspace/readWorkspaceList')
  }
}
</script>
