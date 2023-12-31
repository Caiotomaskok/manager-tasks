import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

import "./App.scss"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='login' element={<Login />} />
    </Routes>
   
  )
}

export default App;
