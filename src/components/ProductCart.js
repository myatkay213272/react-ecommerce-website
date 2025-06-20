import React, { useContext, useState } from 'react'
import reebok from "../assets/reebok.png"
import { TextContext } from '../Context/TextContext'
import { FaShoppingCart, FaTruck } from 'react-icons/fa';

const ProductCart = () => {
  const { selectcolor,cartCount,setCartCount, setSelectColor, selectsize, setSelectSize, images } = useContext(TextContext)
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }


  const handleAddToCart = (e)=>{
    e.preventDefault()
    setCartCount(cartCount + 1)
    console.log(cartCount)
  }

  return (
    <div className="container mt-4">
      <form>
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
            value={selectcolor}
            onChange={(e) => setSelectColor(e.target.value)}
          >
            <option value="">Select Color</option>
            <option value="blue">Blue</option>
          </select>

          {selectcolor === 'blue' && (
            <div className="d-flex gap-2 flex-wrap mb-3">
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

          <label htmlFor="sizeSelect" className="form-label fw-medium mt-3">Choose a size:</label>
          <select
            id="sizeSelect"
            className="form-select mb-3"
            value={selectsize}
            onChange={(e) => setSelectSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="men">EUMEN</option>
          </select>

          {selectsize === "men" && (
            <div className='d-flex gap-2 mt-2 flex-wrap'>
              {["40.5", "41", "42", "43"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`btn ${selectedSize === size ? "bg-black text-white" : "btn-outline-secondary"}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-dark mt-4"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="me-2" />
            Add to cart
          </button>

          <p className="text-muted mt-2">
            <FaTruck className="me-2" />
            Free delivery on orders over $30.00
          </p>
        </div>
      </form>
    </div>
  )
}

export default ProductCart
