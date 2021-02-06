import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'
import SinglePost from './features/posts/SinglePost'
import UpdatePostForm from './features/posts/UpdatePostForm'
// import UpdatePostForm from './features/posts/UpdatePostForm'

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
                {/* <UpdatePostForm /> */}
                <AddPostForm />
                <PostList />
              </>
            )}
          />
          <Route exact path="/posts/:id" component={SinglePost} />
          <Route exact path="/update-post/:id" component={UpdatePostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
