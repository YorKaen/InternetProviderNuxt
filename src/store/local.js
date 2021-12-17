export const state = () => ({
  loggedIn: false,
  arrayStore: []
})

export const mutations = {
  setLoggedIn(state, status){
    state.loggedIn = status;
  },
  setStorageItems(state, value){
    state.arrayStore = [...value]
  },
  addNewItem(state, value){

  },
}

export const actions = {

}

export const getters = {}
