import { useEffect, useState } from 'react'
import { TextContext } from './Context/TextContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Header from './Pages/Header'
import axios from 'axios'


const App = () => {
  const [search, setSearch] = useState('')
  const [selected,setSelected] = useState('')
  const [cartCount,setCartCount] = useState(0)
  const [selectcolor,setSelectColor] = useState('')
  const [selectsize,setSelectSize] = useState('')
  const [selectnew,setSelectNew] = useState('')
  const [products,setProducts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:800/product')
     .then(response=>{
      console.log(response.data)
      setProducts(response.data)
     })
     .catch(error=>console.error('Error fetching data:',error))
  },[])

  const filteredProducts = products.filter(product=>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <TextContext.Provider 
      value={{ 
        search, 
        setSearch, 
        cartCount ,
        setCartCount,
        selected,
        setSelected,
        filteredProducts,
        products,
        selectcolor,
        setSelectColor,
        selectsize,
        setSelectSize,
        selectnew,
        setSelectNew
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
