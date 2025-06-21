import { useContext } from 'react'
import { TextContext } from '../Context/TextContext'
import ProductCart from './ProductCart'

const ProductGallery = ({shoes}) => {
  const { mainImage, setMainImage} = useContext(TextContext)

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {/* Left: Product Gallery */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header text-center">Product Preview</div>
            <div className="card-body text-center">
              <img
                src={mainImage}
                alt="Main"
                className="img-fluid mb-3 border rounded"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />

              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {shoes.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setMainImage(img)}
                    className="border rounded"
                    style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                  />
                ))}

                {shoes.length > 0 && (
                  <div
                    className="d-flex align-items-center justify-content-center border rounded"
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    +{shoes.length} more
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Cart */}
        <div className="col-md-6">
          <ProductCart />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
