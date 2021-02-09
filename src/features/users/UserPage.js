import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostsByUser } from '../posts/postsSlice'
import { selectUserById } from './usersSlice'

const UserPage = ({ match }) => {
  const { id } = match.params

  const user = useSelector((state) => selectUserById(state, id))

  const postsByUser = useSelector((state) => selectPostsByUser(state, id))

  const postTitles = postsByUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}

export default UserPage
