import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onSavePost = () => {
    if (title && content) {
      dispatch(
        addPost({
          title,
          content,
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post's title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post's content :</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button onClick={onSavePost} type="button">
          Save post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
