import * as type from './mutation-types'

export const mutations = {
  [type.INIT_JOKES] (state, payload) {
    state.jokes.push(...payload)
  }
}

