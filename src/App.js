import React from 'react'
import { Routes, Route } from 'react-router'

import Header from './component/Header/Header'
import Home from './component/Home/Home'

const App = () => {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </>
  )
}

export default App