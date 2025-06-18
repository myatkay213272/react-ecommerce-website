import { useContext } from 'react'
import { TextContext } from '../Context/TextContext'

const ClothesGallery = () => {
  const { mainClothes, setMainClothes, clothes } = useContext(TextContext)

  return (
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-header text-center">Clothes Preview</div>
        <div className="card-body text-center">
          <img
            src={mainClothes}
            alt="main-clothes"
            className="img-fluid mb-3 border rounded"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />

          <div className="d-flex gap-2 justify-content-center flex-wrap">
            {clothes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`clothes-${i}`}
                onClick={() => setMainClothes(img)}
                className="border rounded"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            ))}

            {clothes.length > 0 && (
              <div
                className="d-flex align-items-center justify-content-center border rounded"
                style={{
                  width: '100px',
                  height: '100px',
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
      </div>
    </div>
  )
}

export default ClothesGallery
