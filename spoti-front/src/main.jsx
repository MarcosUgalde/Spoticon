import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Login from './views/Login'
import Mood from './views/Mood'
import ParamsInsertion from './views/Params'

const Main = () => {
  return (
      <Switch>      
        <Route path='/login' component={Login} />
        <Route path='/insert-mood' component={Mood} />
        <Route path='/insert-params' component={ParamsInsertion} />
        <Redirect to='/login' />
      </Switch>   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
