const state = ()=>({
  position: {},
  userid: '222',
  username: '123'
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setUserId(state, val) {
    state.userid = val
  },
  getUserName(state, val) {
    state.username = val
  }
}

const actions = {
  setPosition: ({commit}, position)=>{
    commit('setPosition', position)
  },
  setUserId: ({commit}, id)=>{
    commit('setUserId', id)
  },
  getUserName: ({commit}, id)=>{
    commit('getUserName', id)
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
