import React, { useContext } from 'react'
import { TextContext } from '../Context/TextContext'
import logo from "./logo192.png"
import CardBadge from '../components/CardBadge'

const Header = () => {
  const { search, setSearch } = useContext(TextContext)

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <img src={logo} alt="logo" width="50" />
      
      <input 
        className="form-control w-50"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text' 
        placeholder='Search'
      />

      <div className="ms-3">
        <CardBadge />
      </div>
    </header>
  )
}

export default Header
