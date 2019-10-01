import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Album from './components/Album';
import albums from './albums.json';

class App extends Component {
  // Setting this.state.albums to the albums json array
  state = {
    albums,
    score: 0,
    highscore: 0
  };

  

  gameEnd = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.albums.forEach(card => {
      card.count = 0;
    });
    alert(`You clicked one twice! Game Over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clicked = id => {
    this.state.albums.find((o, i) => {
      if (o.id === id) {
        if(albums[i].count === 0){
          albums[i].count = albums[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.albums.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameEnd();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        <br />
        <div className="card-columns">
        {this.state.albums.map(album => (
          <Album
            clicked={this.clicked}
            id={album.id}
            key={album.id}
            image={album.image}
          />
        ))}
        </div>
      </Wrapper>
    )
  };
};

export default App;
