import { takeEvery, put, call, spawn } from 'redux-saga/effects'
import { getPosts, getUsers } from '../../api'
import { postsActions } from '../slices/posts'
import { userActions } from '../slices/user'

export function* handlePosts() {
  try {
    const data = yield call(getPosts)
    yield put(postsActions.setPosts(data))
  } catch (err) {
    console.log(err.message)
  }
}

export function* handleUsers() {
  try {
    const data = yield call(getUsers)
    yield put(userActions.setUsers(data))
  } catch (err) {
    console.error(err.message)
  }
}

export function* handleUsersAndPosts() {
  yield spawn(handleUsers)
  yield spawn(handlePosts)
}

export function* watchClickSaga() {
  yield takeEvery(postsActions.getUsersAndPosts, handleUsersAndPosts)
}

export default function* rootSaga() {
  yield watchClickSaga()
}
