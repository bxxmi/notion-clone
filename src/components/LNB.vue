<template>
  <nav style="width: 240px;">
    <div class="header"></div>
    <ul>
      <!-- :workspace는 배열로 가져온 값들 하나하나를 담은것이다. 이것을 자식 컴포넌트로 보낼 것임 -->
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace" />
    </ul>
    <div class="actions"></div>
  </nav>
</template>

<script>
import WorkspaceItem from '~/components/WorkspaceItem'

export default {
  components: {
    WorkspaceItem
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaceList
    }
  }
}
</script>
