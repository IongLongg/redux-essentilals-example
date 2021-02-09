import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { addNewPost } from './postsSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const canSave =
    [title, content, authorId].every(Boolean) && addRequestStatus === 'idle'

  const authorOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setAuthorId(e.target.value)

  const onSavePost = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewPost({ title, content, user: authorId })
        )
        unwrapResult(resultAction)

        setTitle('')
        setContent('')
        setAuthorId('')
      } catch (error) {
        console.error('Failed to save the post', error)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postAuthor">Author :</label>
        <select id="postAuthor" value={authorId} onChange={onAuthorChanged}>
          <option value="" hidden></option>
          {authorOptions}
        </select>
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
        <button onClick={onSavePost} type="button" disabled={!canSave}>
          Save post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
