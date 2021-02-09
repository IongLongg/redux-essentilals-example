import { client } from '../../api/client'
const {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} = require('@reduxjs/toolkit')

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.users
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [fetchUsers.fulfilled]: usersAdapter.setAll,
  },
})

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users)

export default usersSlice.reducer
