import React, { useContext } from 'react'
import { TextContext } from '../App'

const ClothesGallery = () => {
  const { mainClothes, setMainClothes, clothes } = useContext(TextContext)


  return (
    <div className="container my-4">
      {/* Main Clothes Image */}
      <div className="col-md-2 mb-3 text-center">
        <img
          src={mainClothes}
          alt="main-clothes"
          className="img-fluid border rounded"
          style={{ maxHeight: '300px', objectFit: 'contain' }}
        />
      </div>

     
      <div className="d-flex gap-2 ">
        {clothes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`clothes-${i}`}
            onClick={() => setMainClothes(img)}
            className="border rounded"
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
        ))}

        
        {clothes.length && (
          <div
            className="d-flex align-items-center justify-content-center border rounded"
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#f5f5f5',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#555',
            }}
          >
            +{clothes.length} more
          </div>
        )}
      </div>
    </div>
  )
}

export default ClothesGallery
