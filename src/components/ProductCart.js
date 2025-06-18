import React, { useContext } from 'react'
import reebok from "../assets/reebok.png"
import { TextContext } from '../Context/TextContext'

const ProductCart = () => {
  const { selectcart, setSelectCart, images } = useContext(TextContext)

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img src={reebok} alt="Reebok Logo" width="50" className="img-fluid" />
          <h5 className="mb-0">Reebok</h5>
        </div>

        <p className="text-muted small mb-1">Product Code: HRISqswdbh-8</p>

        <h2 className="fw-bold mb-2">Zig Kinetica 3 Shoes</h2>

        <div className="mb-2">
          <span className="text-warning me-2">★ ★ ★ ★ ☆</span>
          <span className="text-muted">(123 reviews)</span>
        </div>

        <h3 className="text-success fw-bold mb-3">$199.00</h3>

        <label htmlFor="colorSelect" className="form-label fw-medium">Choose a color:</label>
        <select
          id="colorSelect"
          className="form-select mb-3"
          value={selectcart}
          onChange={(e) => setSelectCart(e.target.value)}
        >
          <option value="">Select Color</option>
          <option value="blue">Blue</option>
        </select>

        {selectcart === 'blue' && (
          <div className="d-flex gap-2 mt-2 flex-wrap">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`blue-${i}`}
                style={{ width: '30px', height: '20px' }}
                className="border rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCart
