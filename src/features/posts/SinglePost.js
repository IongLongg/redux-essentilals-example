import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { selectPostById } from './postsSlice'

const SinglePost = ({ match }) => {
  const { id } = match.params

  const post = useSelector((state) => selectPostById(state, id))

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor authorId={post.user} />
        <p className="post-content">{post.content}</p>
        <Link to={`/update-post/${post.id}`} className="button">
          Update
        </Link>
      </article>
    </section>
  )
}

export default SinglePost
