<template>
  <div class="app__inner">
    <LNB />
    <div class="app__page">
      <RouterView />
    </div>
  </div>
</template>

<script>
import LNB from '~/components/LNB'

export default {
  components: {
    LNB
  }
}
</script>

<style lang="scss" scoped>
.app__inner{
  display: flex;
  height: 100vh;
  font-size: 14px;
  line-height: 1.4;
  font-family: 'Noto Sans KR', sans-serif;
  color: $color-font;
 .app__page {
   flex-grow: 1;
   height: 100%;
  }
} 
</style>
