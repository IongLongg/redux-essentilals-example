import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPostIds } from './postsSlice'
import PostExcerpt from './PostExcerpt'

const PostList = (props) => {
  const dispatch = useDispatch()

  const orderedPostIds = useSelector(selectPostIds)
  const status = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  let content

  if (status === 'succeeded') {
    content = orderedPostIds.map((id) => <PostExcerpt key={id} postId={id} />)
  } else if (status === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (status === 'failed') {
    content = <div>{error}</div>
  }

  return (
    // standalone section
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostList
