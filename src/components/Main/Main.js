import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Games from '../Games/Games';
import Footer from '../Footer/Footer';
import styles from './Main.css';

class Main extends Component {
  state = {
    sport: [],
    selectedSport: ''
  };

  handleClick = e => {
    const selectedSport = e.target.innerHTML.toLowerCase();

    this.setState({ ...this.state, selectedSport });
  };

  sportSelector = () => {
    const filterSports = this.state.sport.filter(e =>
      e.this.state.sport.includes(this.state.selectedSport)
    );
    console.log(this.state.sport); //
    console.log(this.state.selectedSport); //
  };

  randomOdds = () => {
    const randomOdds = (Math.random() * (10.0 - 1.0 + 1.0) + 1.0).toFixed(2);
    return randomOdds;
  };

  componentDidMount() {
    this.getData();
    this.randomOdds();
  }

  getData = () => {
    fetch(
      'https://s3-eu-west-1.amazonaws.com/test-assignment/test-assignment.json'
    )
      .then(response => response.json())
      .then(sport => {
        this.setState({ sport });
      });
  };
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Menu sport={this.state.sport} handleClick={this.handleClick} />
        <Games
          sport={this.state.sport}
          selectedSport={this.state.selectedSport.toLowerCase()}
          randomOdds={this.randomOdds}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
