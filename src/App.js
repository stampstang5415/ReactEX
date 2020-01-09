import React from "react";
import Toggle from "./button";
// import logo from './logo.svg';
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class CounterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleClickplus(e) {
    this.setState({
      count: this.state.count + 1
      // countobj: this.state.countobj + 1
    });
    console.log(this);
  }
  handleClickminus = b => {
    this.setState({
      count: this.state.count - 1
      // countobj: this.state.countobj + 1
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1 className="CounterHead">
          Time: {this.state.date.toLocaleTimeString()}
        </h1>
        <h1 className="CounterHead">Counter: {this.state.count}</h1>
        <div className="Counterbutton">
          <button href onClick={this.handleClickplus.bind(this)}>
            Click me +
          </button>
          <button href onClick={this.handleClickminus}>
            Click me -
          </button>
          <Toggle />
        </div>
      </div>
    );
  }
}

export default CounterComponent;
