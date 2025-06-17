import React, { useState } from 'react'
import clothes from "../assets/clothes1.png"
import ProductGallery from '../components/ProductGallery'

const Home = () => {
  const [selected, setSelected] = useState('')

  return (
    <main className="container mt-4">
      <h3>Select a category</h3>
      <select
        className="form-select w-50 mb-4"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Clothes and shoes</option>
        <option value="clothes">Clothes</option>
        <option value="shoes">Shoes</option>
      </select>

      {selected === 'shoes' && (
        <ProductGallery/>
      )}

      {selected === 'clothes' && (
        <img
          src={clothes}
          alt="Clothes"
          className="img-fluid"
          style={{ maxWidth: '300px' }}
        />
      )}

    </main>
  )
}

export default Home
