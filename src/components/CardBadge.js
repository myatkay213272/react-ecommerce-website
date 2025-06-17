import React, { useContext } from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { TextContext } from '../App'

const CardBadge = () => {
  const { cartCount } = useContext(TextContext)

  return (
    <div className="d-flex align-items-center gap-3">
      <div className="position-relative text-center">
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cartCount}
          </span>
        )}
        <p className="mb-0">Cart</p>
      </div>

      <div className="text-center">
        <FaHeart size={24} />
        <p className="mb-0">Favourites</p>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqE5w5oSzJ5hkVXlqk9GW5aC--Jc97eU5bA&s"
        alt="profile"
        className="rounded-circle"
        width="40"
      />
    </div>
  )
}

export default CardBadge
