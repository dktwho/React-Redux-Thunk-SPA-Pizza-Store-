import axios from 'axios'


export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload
})

 const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
  dispatch(setPizzas(data))
  })
}

const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})

export  {setPizzas, fetchPizzas}
