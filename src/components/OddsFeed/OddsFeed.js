import React from 'react';
import './OddsFeed.css';

const OddsFeed = props => {
    render() {
        
    }
  return (
    <div className="odds-feed-wrapper">
      <p>Odds</p>
      <p>{props.randomOdds}</p>
    </div>
  );
};

export default OddsFeed;
