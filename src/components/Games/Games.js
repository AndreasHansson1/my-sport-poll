import React from 'react';
import OddsFeed from '../OddsFeed/OddsFeed';
import './Games.css';
import background from '../../assets/images/background.jpg';

const gamesWrapper = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};
const Games = props => {
  const sportArray = props.sport.map((data, index) => {
    if (data.sport.toLowerCase() === props.selectedSport) {
      return (
        <div key={index} className="sport-div">
          <h4>{data.homeName}</h4>
          <p>vs</p>
          <h4>{data.awayName}</h4>
          <OddsFeed
            randomArray={props.randomArray}
            clickEvent={props.clickEvent}
          />
        </div>
      );
    }
  });

  return (
    <div style={gamesWrapper} className="games-wrapper">
      {sportArray}
    </div>
  );
};

export default Games;
