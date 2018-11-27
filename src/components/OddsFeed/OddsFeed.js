import React from 'react';
import './OddsFeed.css';

const OddsFeed = props => {
  // const randomOdds = props.randomArray.map(odds => {
  //   console.log(odds);

  //   return <div className="odds-feed-wrapper">{odds}</div>;
  // });

  return (
    <div className="odds-feed-wrapper">
      <h5>Odds</h5>
      <div className="wrapper">
        <div className="odds-div">
          <p>Home</p>
          <p>{props.randomArray[0]}</p>
        </div>
        <div className="odds-div">
          <p>Draw</p>
          <p>{props.randomArray[1]}</p>
        </div>
        <div className="odds-div">
          <p>Away</p>
          <p>{props.randomArray[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default OddsFeed;
