import axios from 'axios'
import { useDispatch } from 'react-redux'



 const fetchPizzas = () => (dispatch) => {
  //const dispatch = useDispatch();
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data))
  })
}

const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})

export  {setPizzas, fetchPizzas}
