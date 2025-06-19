import React, { useEffect, useState } from 'react'
import profile1 from "../assets/profile1.avif"
import profile2 from "../assets/profile2.jpg"
import ProgressBar from './ProgressBar'

const Reviews = ({sortOrder}) => {
  const date = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const initialReviews = [
    {
      id: 1,
      name: "Helen M",
      photo: profile1,
      rating: "★ ★ ★ ★ ☆",
      text: "This product is amazing! Highly recommended.",
      likes: 0,
      unlikes: 0,
      timestamp: 1718000000000
    },
    {
      id: 2,
      name: "John D",
      photo: profile2,
      rating: "★ ★ ★ ★ ☆",
      text: "Good shoes.",
      likes: 0,
      unlikes: 0,
      timestamp: 1717000000000
    }
  ]

  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    const sorted = [...initialReviews].sort((a,b)=>{
        if(sortOrder === 'new'){
            return b.timestamp - a.timestamp
        }else if(sortOrder === 'old'){
            return a.timestamp - b.timestamp
        }else {
            return 0
        }
    })
    setReviews(sorted)
  },[sortOrder])

  const handleLike = (id) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ))
  }

  const handleUnlike = (id) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, unlikes: review.unlikes + 1 } : review
    ))
  }

  return (
    <>
      {reviews.map(review => (
        <div className="card p-3 shadow-sm mb-3" key={review.id}>
          <div className="d-flex align-items-start">
            <img
              src={review.photo}
              alt="Profile"
              className="me-3"
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            />
            <div>
              <strong>{review.name}</strong>
              <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{date}</p>
              <div className="mb-2 text-warning">{review.rating}</div>
              <p>{review.text}</p>

              <div className="mt-3 d-flex gap-3">
                <button className="btn btn-outline-primary btn-sm" onClick={() => alert('Reply clicked')}>
                  Reply
                </button>
                <button className="btn btn-outline-success btn-sm" onClick={() => handleLike(review.id)}>
                  👍 Like {review.likes > 0 && <span>({review.likes})</span>}
                </button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleUnlike(review.id)}>
                  👎 Unlike {review.unlikes > 0 && <span>({review.unlikes})</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <ProgressBar/>
    </>
  )
}

export default Reviews
