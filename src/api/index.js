export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json()
}

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return await res.json()
}
