import React from 'react';

const ProgressBar = () => {
  const rating = 4.8;
  const percentage = (rating / 5) * 100;

  return (
    <div className="mb-3">
      <div className="mb-1">
        ★ ★ ★ ★ ☆ <strong>{rating}</strong>
      </div>
      <div className="progress" style={{ height: '20px' }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
