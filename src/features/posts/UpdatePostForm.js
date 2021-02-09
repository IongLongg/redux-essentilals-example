import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'

const UpdatePostForm = ({ match }) => {
  const { id } = match.params

  const post = useSelector((state) => selectPostById(state, id))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id,
          title,
          content,
        })
      )
      history.push(`/posts/${id}`)
    }
  }

  return (
    <section>
      <h2>Update a post</h2>
      <form>
        <label htmlFor="postTitle">Post's title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post's content :</label>
        <textarea
          style={{ height: '100px' }}
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePost}>
          Save post
        </button>
      </form>
    </section>
  )
}

export default UpdatePostForm
