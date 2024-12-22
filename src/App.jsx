import React from 'react'
import Signin from './components/Signin'
import Nav from './components/Nav'
import Section from './components/Section'
import { Route,Routes} from 'react-router-dom'
import Support from './pages/Support'
import Ai from './pages/Ai'

const App = () => {
  return (
    <div className=' flex  flex-col sm:flex-row  gap-4 '>
      <Nav/>
      <Routes>
        <Route path='/' element={<Section/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/ai' element={<Ai/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
 
      </div>
  )
}

export default App