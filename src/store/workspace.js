import axios from 'axios'
import router from '~/routes'

export default {
  namespaced: true,
  state: () => ({
    // 사용할 워크스페이스 목록이 담김
    workspaces: [],
    currentWorkspace: {}
  }),
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    // 워크스페이스 리스트 가져오기
    async readWorkspaceList({ commit }) {
      const workspaceList = await request({
        method: 'GET'
      })
      commit('assignState', {
        workspaceList
      })
      console.log(workspaceList)
    },
    // 단일 워크스페이스 가져오기
    readWorkspaceItem() {

    },
    async createWorkspace({ commit }, payload = {}) {
      const { parentId } = payload
      const currentWorkspace = await request({
        method: 'POST',
        data: {
          title: '',
          parentId
        }
      })
      commit('assignState', {
        currentWorkspace
      })
      // this.$router
      router.push({
        // children의 name과 같다
        // 즉, 해당 이름을 가진 페이지로 이동하겠다는 뜻
        name: 'Workspace',
        params: {
          id: currentWorkspace.id
        }
      })
    },
    updateWorkspace() {

    },
    deleteWorkspace() {

    }
  }
}

// API 요청 로직을 재활용하기 위한 함수
async function request(options) {
  // workspaceId 값이 없을 것을 대비해서 기본값으로 빈 값을 설정함
  const { workspaceId = '', method, data } = options
  const { data: dataToReturn } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${workspaceId}`,
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'bomi'
    },
    data
  })
  return dataToReturn
}
