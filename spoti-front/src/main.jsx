import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Login from './views/Login'
import Mood from './views/Mood'

const Main = () => {
  return (
      <Switch>      
        <Route path='/login' component={Login} />
        <Route path='/insert-mood' component={Mood} />
        <Redirect to='/login' />
      </Switch>   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
