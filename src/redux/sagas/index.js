import { takeEvery, put, call } from 'redux-saga/effects'
import { getPosts } from '../../api'
import { postsActions } from '../slices/posts'

export function* getPostsWorker() {
  const data = yield call(getPosts)
  yield put(postsActions.setPosts(data))
}

export function* watchClickSaga() {
  yield takeEvery(postsActions.getPosts, getPostsWorker)
}

export default function* rootSaga() {
  yield watchClickSaga()
}
