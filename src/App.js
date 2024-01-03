import { useDispatch } from 'react-redux'
import { postsActions } from './redux/slices/posts'

function App() {
  const dispatch = useDispatch()

  const handleGetPostsAndUsers = () => {
    dispatch(postsActions.getUsersAndPosts())
  }

  return (
    <div>
      <button onClick={handleGetPostsAndUsers}>Get Posts and Users</button>
    </div>
  )
}

export default App
