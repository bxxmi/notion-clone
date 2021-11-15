<template>
  <section>
    <div class="inner">
      <div
        ref="title"
        class="title"
        placeholder="제목 없음"
        contenteditable
        @blur="onInput">
        {{ title }}
      </div>
      <div
        ref="content"
        class="content"
        placeholder="내용을 입력하세요"
        contenteditable
        @blur="onInput"
        v-html="content"></div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.workspace.currentWorkspace.title
    },
    content() {
      return this.$store.state.workspace.currentWorkspace.content
    }
  },
  watch: {
    $route() {
      this.$store.dispatch('workspace/readWorkspaceItem', {
      id: this.$route.params.id
    })
    }
  },
  created() {
    this.$store.dispatch('workspace/readWorkspaceItem', {
      id: this.$route.params.id
    })
  },
  methods: {
    onInput() {
      const title = this.$refs.title.textContent
      const content = this.$refs.content.textContent

      if (title === this.title) {
        return 
      }
      this.$store.dispatch('workspace/updateWorkspace', {
        id: this.$route.params.id,
        title,
        content
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0 200px;
  .inner {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
    [contenteditable] {
      outline: none;
      cursor: text;
      &.title {
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      &.content {
        font-size: 16px;
        line-height: 1.8;
      }
      &:empty::before {
        content: attr(placeholder);
        color: rgba($color-font, .3);
      }
    }
  }
}
</style>
