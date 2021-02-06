import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostList = (props) => {
  const posts = useSelector((state) => state.posts)

  const renderPosts = posts.map((post) => (
    // article represents a self-container, for reusable
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View post
      </Link>
    </article>
  ))

  return (
    // standalone section
    <section className="posts-list">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostList
