import React, { useContext } from 'react'
import reebok from "../assets/reebok.png"
import { TextContext } from '../Context/TextContext'

const ProductCart = () => {
  const { selectcart, setSelectCart, images } = useContext(TextContext)

  return (
    <div className="container-fluid mt-4">
      <div className="row"> {/* remove justify-content-center */}

        {/* Product Preview */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header text-center">Product Preview</div>
            <div className="card-body text-center">
              <img src={images[0]} alt="Main Product" className="img-fluid mb-3" />
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className="border rounded"
                    style={{ width: '60px', height: '40px' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-6 mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img src={reebok} alt="Reebok Logo" width="50" className="img-fluid rounded-circle" />
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
            <div className="d-flex gap-2 flex-wrap">
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
    </div>
  )
}

export default ProductCart
