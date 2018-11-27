import React from 'react';
import styles from './Menu.css';

const Menu = props => {
  const filteredData = [...new Set(props.sport.map(item => item.sport))];

  const mapData = filteredData.map((data, index) => {
    return (
      <div key={index} className="menu-item" onClick={props.handleClick}>
        {data}
      </div>
    );
  });
  return <div className="menu-wrapper">{mapData}</div>;
};

export default Menu;
