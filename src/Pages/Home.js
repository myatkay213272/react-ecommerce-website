import React from 'react'
import Category from '../components/Category'
import ReviewPage from '../components/ReviewPage'

const Home = () => {

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <Category />
        </div>
        <div className='col-md-6'>
          <ReviewPage/>
        </div>
      </div>
    </main>
  )
}

export default Home
