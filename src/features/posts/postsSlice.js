const { createSlice, nanoid } = require('@reduxjs/toolkit')

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (payload) => {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        }
      },
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload
      const post = state.find((post) => post.id === id)
      if (post) {
        post.title = title
        post.content = content
      }
    },
  },
})

export const { addPost, updatePost } = postsSlice.actions
export default postsSlice.reducer

// export const selectAllPosts = state => state.posts;
// export const selectPostById = state => state.posts.find(post => post.id === postId);
