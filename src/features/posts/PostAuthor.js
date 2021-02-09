import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'

const PostAuthor = ({ authorId }) => {
  const author = useSelector((state) => selectUserById(state, authorId))

  return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor
