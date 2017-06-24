// import * as types from './mutation-types'
import types from './mutation-types'

// export const initJokes = ({commit}) => {
//   console.log('types')
//   fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
//     {method: 'GET'}
//   )
//     .then(response => response.json())
//     .then(json => commit(types.INIT_JOKES, json))
// }

// export const addJokes = ({commit}) => {
//   fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
//     method: 'GET'
//   })
//     .then(response => response.json())
//     .then(json => commit(types.ADD_JOKE, json))
// }
const initJokes = ({commit}) => {
  // console.log(types)
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
    {method: 'GET'}
  )
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}

const addJoke = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}
// we can using context.commit() instead using param
const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index)
}

export default {
  initJokes,
  addJoke,
  removeJoke
}
