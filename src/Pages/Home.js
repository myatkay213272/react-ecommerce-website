import React, { useContext, useState } from 'react'
import ProductGallery from '../components/ProductGallery'
import ClothesGallery from '../components/ClothesGallery'
import { TextContext } from '../App'

const Home = () => {
  const [selected, setSelected] = useState('')
  const { images, clothes } = useContext(TextContext)

  return (
    <main className="container mt-4">
      <h5 className="mb-3">Select a category</h5>

      <select
        className="form-select form-select-sm w-25 mb-4"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="clothes&shoes">Clothes and Shoes</option>
        <option value="clothes">Clothes</option>
        <option value="shoes">Shoes</option>
      </select>

      {selected === 'clothes&shoes' && (
        <div className="row">
          <div className="col-md-1 text-center mb-3">
            <img
              src={images[0]}
              alt="shoe"
              className="img-thumbnail"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </div>
          <div className="col-md-6 text-center mb-3">
            <img
              src={clothes[0]}
              alt="clothes"
              className="img-thumbnail"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </div>
        </div>
      )}

      {selected === 'shoes' && <ProductGallery />}
      {selected === 'clothes' && <ClothesGallery />}
    </main>
  )
}

export default Home
