import React from 'react'
import { Routes, Route } from 'react-router'

import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Character from './component/Character/Character'

const App = () => {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/character/:char_id' element={<Character/>}/>
    </Routes>
  </>
  )
}

export default App