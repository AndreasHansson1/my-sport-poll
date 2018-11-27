import React from 'react';
import './OddsFeed.css';

const OddsFeed = props => {
  return (
    <div className="odds-feed-wrapper">
      <h5>Odds</h5>
      <div className="wrapper">
        <div className="odds-div" onClick={props.clickEvent}>
          <p>Home</p>
          <p>{props.randomArray[0]}</p>
        </div>
        <div className="odds-div" onClick={props.clickEvent}>
          <p>Draw</p>
          <p>{props.randomArray[1]}</p>
        </div>
        <div className="odds-div" onClick={props.clickEvent}>
          <p>Away</p>
          <p>{props.randomArray[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default OddsFeed;
