export const state = () => ({
  userId: '',
})

export const mutations = {
  generateID(state) {
    let max = 10000
    let min = 100
    let d = new Date
    state.userId = 'RANDOM-' + (Math.floor(Math.random() * (max - min + 1)) + min) + '' + (d.getDate()) + '' + '00000' + (Math.floor(Math.random() * (max - min * 5)) + min) + '-' + (Math.floor(Math.random() * (min * 15)) + min)
  },
}

export const actions = {

}

export const getters = {

}
