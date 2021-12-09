export const state = () => ({
  loggedIn: false,
})

export const mutations = {
  setLoggedIn(state, status){
    state.loggedIn = status;
  }
}

export const actions = {

}

export const getters = {}
