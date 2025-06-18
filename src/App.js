import { useState } from 'react'
import { TextContext } from './Context/TextContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Header from './Pages/Header'
import shoe3 from './assets/shoe3.jpg'
import shoe4 from './assets/shoe4.jpg'
import shoe5 from './assets/shoe5.webp'
import shoe6 from './assets/shoe6.jpg'
import clothes1 from "./assets/clothes1.png"
import clothes2 from "./assets/clothes2.jpg"
import clothes3 from "./assets/clothes3.jpg"

const App = () => {
  const [search, setSearch] = useState('')
  const [selected,setSelected] = useState('')
  const images = [shoe3, shoe4, shoe5, shoe6]
  const [mainImage,setMainImage] = useState(images[0])
  const clothes = [clothes1,clothes2,clothes3]
  const [mainClothes,setMainClothes] = useState(clothes[0])
  const cartCount = 4
  const [selectcolor,setSelectColor] = useState('')
  const [selectsize,setSelectSize] = useState('')

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
        images,
        mainClothes,
        setMainClothes,
        clothes,
        selectcolor,
        setSelectColor,
        selectsize,
        setSelectSize
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
