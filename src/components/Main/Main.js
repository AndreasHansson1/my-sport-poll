import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Games from '../Games/Games';
import Footer from '../Footer/Footer';
import Result from '../Result/Result';
import './Main.css';

class Main extends Component {
  state = {
    sport: [],
    selectedSport: '',
    randomArray: [],
    showComponent: false
  };

  handleClick = e => {
    const selectedSport = e.target.innerHTML.toLowerCase();

    this.setState({ ...this.state, selectedSport });
  };

  sportSelector = () => {
    this.state.sport.filter(e =>
      e.this.state.sport.includes(this.state.selectedSport)
    );
  };

  randomOdds = () => {
    const randomArray = [];
    for (let i = 0; i < 3; i++) {
      randomArray.push(
        Math.floor(Math.random() * (10.0 - 1.0 + 1.0) + 1.0).toFixed(2)
      );
    }
    this.setState({ ...this.state, randomArray });
  };

  componentDidMount() {
    this.getData();
    this.randomOdds();
  }

  clickEvent = () => {
    this.setState({
      showComponent: true
    });
  };

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
        {this.state.showComponent ? (
          <Result />
        ) : (
          <Games
            sport={this.state.sport}
            selectedSport={this.state.selectedSport.toLowerCase()}
            randomArray={this.state.randomArray}
            clickEvent={this.clickEvent}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default Main;
