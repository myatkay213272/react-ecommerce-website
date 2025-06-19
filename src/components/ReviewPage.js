import React, { useContext } from 'react'
import { TextContext } from '../Context/TextContext'
import Reviews from './Reviews'

const ReviewPage = () => {
  const { selectnew, setSelectNew } = useContext(TextContext)

  return (
    <section className="container mt-5">
      <div className="mb-4">
        <div className="d-flex mb-3">
          <h2 className='me-4'>Details</h2>
          <h2 className="fw-bold me-4">Reviews</h2>
          <h2>Discussion</h2>
    </div>

        <div className="mb-4">
          <select
            className="form-select w-50"
            value={selectnew}
            onChange={(e) => setSelectNew(e.target.value)}
          >
            <option value="">-- Choose one --</option>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>

    {selectnew && <Reviews sortOrder={selectnew} />}

    </section>
  )
}

export default ReviewPage
