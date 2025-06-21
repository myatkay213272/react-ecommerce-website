import { useContext, useState } from "react"
import { TextContext } from "../Context/TextContext"
import ProductGallery from './ProductGallery'
import ClothesGallery from './ClothesGallery'

const Category = () => {
  const [selected, setSelected] = useState('')
  const { filteredProducts } = useContext(TextContext)

  const shoes = filteredProducts.filter(p=>p.category === 'shoes')
  const clothes = filteredProducts.filter(p=>p.category === 'clothes')

  const shoeImage = shoes.length > 0 ? shoes[0].image : ''
  const clothesImage = clothes.length > 0 ? clothes[0].image : ''

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h5 className="mb-3">Select a Category</h5>
        <select
          className="form-select w-50"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- Choose an option --</option>
          <option value="clothes&shoes">Clothes and Shoes</option>
          <option value="clothes">Clothes</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>

      {selected === 'clothes&shoes' && (
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">Shoes</div>
              <div className="card-body d-flex justify-content-center">
                {
                  shoeImage ? (
                    <img 
                      src={shoeImage}
                      alt="shoe"
                      className="img-fluid rounded"
                      style={{maxWidth:'300px',height:'auto',objectFit : 'contain'}}
                    />
                  ) : (
                    <p>No shoe images available.</p>
                  )
                }
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">Clothes</div>
              <div className="card-body d-flex justify-content-center">
                {
                  clothesImage ? (
                    <img
                      src={clothesImage}
                      alt="clothes"
                      className="img-fluid rounded"
                      style={{maxWidth : '300px',height : 'auto' ,objectFit : 'contain'}}
                    />
                  ):(
                    <p>No clothes images available.</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )}

      {selected === 'shoes' && <ProductGallery shoes={shoes} />}
      {selected === 'clothes' && <ClothesGallery clothes={clothes}/>}
    </div>
  )
}

export default Category
