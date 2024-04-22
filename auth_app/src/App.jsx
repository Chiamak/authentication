  import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Error from './components/error'
import Login from './components/login/login'
import Register from './components/login/register'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// create a router 
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '*',
    element: <div><Error /></div>
  }
  
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App
