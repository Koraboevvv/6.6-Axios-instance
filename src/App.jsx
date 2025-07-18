import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Help from './pages/help/Help';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/not-found/Not-found'
import Login from './pages/login/Login';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Layout/>} >
          <Route index={true} element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/help' element={<Help/>}/>

        </Route>  
          <Route path='/login' element={<Login/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App