import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './Hero'
import Skill from './Skill'
import ProductList from './components/ProductList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/skills' element={<Skill/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App