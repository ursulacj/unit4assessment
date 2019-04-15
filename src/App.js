import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';


class App extends Component {

  state = {
    button1Selected : false,
    button2Selected : false,
    button3Selected : false,
    button4Selected : false,
  }

/*-----------------Event Handlers----------------*/ 

handleClick1 = () => {    
  this.state.button1Selected ? this.setState({button1Selected: false}) : this.setState({button1Selected: true}); 
}
handleClick2 = () => {    
  this.state.button2Selected ? this.setState({button2Selected: false}) : this.setState({button2Selected: true}); 
}
handleClick3 = () => {    
  this.state.button3Selected ? this.setState({button3Selected: false}) : this.setState({button3Selected: true}); 
}
handleClick4 = () => {    
  this.state.button4Selected ? this.setState({button4Selected: false}) : this.setState({button4Selected: true}); 
}

handleReset = () => {
  this.setState({
    button1Selected: false,
    button2Selected: false,
    button3Selected: false,
    button4Selected: false,
    });
}

/*-----------------Render Method----------------*/ 
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            button1Selected={this.state.button1Selected}
            button2Selected={this.state.button2Selected}
            button3Selected={this.state.button3Selected}
            button4Selected={this.state.button4Selected}
            handleClick1={this.handleClick1}
            handleClick2={this.handleClick2}
            handleClick3={this.handleClick3}
            handleClick4={this.handleClick4}
          />
          <Circles 
            button1Selected={this.state.button1Selected}
            button2Selected={this.state.button2Selected}
            button3Selected={this.state.button3Selected}
            button4Selected={this.state.button4Selected}
          />
          <button className="resetBtn" onClick={this.handleReset}>RESET</button>
        </main>
      </div>
    );
  }
}

export default App;
