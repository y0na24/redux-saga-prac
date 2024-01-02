import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './redux/slices/counter'

function App() {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  const handleIncreaseCount = () => {
    dispatch(counterActions.increment())
  }

  const handleDecreaseCount = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <button onClick={handleIncreaseCount}>+</button>
      <button onClick={handleDecreaseCount}>-</button>
      <div>{count}</div>
    </div>
  )
}

export default App
