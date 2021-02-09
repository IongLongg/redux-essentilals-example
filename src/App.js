import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import NotificationsList from './features/notifications/NotificationsList'
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'
import SinglePost from './features/posts/SinglePost'
import UpdatePostForm from './features/posts/UpdatePostForm'
import UserPage from './features/users/UserPage'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostList />
              </>
            )}
          />
          <Route exact path="/posts/:id" component={SinglePost} />
          <Route exact path="/update-post/:id" component={UpdatePostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:id" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
