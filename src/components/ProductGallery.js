import { useContext } from 'react'
import { TextContext } from '../App'

const ProductGallery = () => {
  const { mainImage, setMainImage, thumbnailsToShow, images } = useContext(TextContext)

  return (
    <div className="container my-4">
      {/* Main Image */}
      <div className="mb-3 text-center">
        <img
          src={mainImage}
          alt="Main"
          className="img-fluid"
          style={{ maxHeight: '300px', objectFit: 'contain' }}
        />
      </div>

      {/* array.slice(start,end) */}
      <div className="d-flex gap-2">
        {images.slice(0, thumbnailsToShow).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setMainImage(img)}
            className="border rounded"
            style={{ width: '60px', height: '60px', cursor: 'pointer' }}
          />
        ))}

        
        {images.length  && (
          <div
            className="d-flex align-items-center justify-content-center border rounded"
            style={{ width: '60px', height: '60px', backgroundColor: '#f5f5f5' }}
          >
            +{images.length} more
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductGallery
