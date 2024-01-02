import { useDispatch } from 'react-redux'
import { postsActions } from './redux/slices/posts'

function App() {
  const dispatch = useDispatch()

  const handleGetPosts = () => {
    dispatch(postsActions.getPosts())
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Get Posts</button>
    </div>
  )
}

export default App
