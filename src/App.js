import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Header from './Pages/Header'
import shoe3 from './assets/shoe3.jpg'
import shoe4 from './assets/shoe4.jpg'
import shoe5 from './assets/shoe5.webp'
import shoe6 from './assets/shoe6.jpg'

export const TextContext = createContext()

const App = () => {
  const [search, setSearch] = useState('')
  const [selected,setSelected] = useState('')
  const images = [shoe3, shoe4, shoe5, shoe6]
  const [mainImage,setMainImage] = useState(images[0])
  const thumbnailToShow = 4
  const cartCount = 4

  return (
    <TextContext.Provider 
      value={{ 
        search, 
        setSearch, 
        cartCount ,
        selected,
        setSelected,
        mainImage,
        setMainImage,
        thumbnailToShow,
        images
      }}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </TextContext.Provider>
  )
}

export default App
