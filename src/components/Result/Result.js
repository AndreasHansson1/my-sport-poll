import React from 'react';
import './Result.css';

const Result = () => {
  const random = Math.random() >= 0.5;
  return (
    <div className="result-wrapper">
      {random ? <h1>You Won!</h1> : <h1>You Lost</h1>}
    </div>
  );
};

export default Result;
