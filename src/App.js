import React from "react";
import Toggle from "./button";
import TodoList from "./TodoList";
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
  constructor(props) {
    // var elmnt = document.getElementById("all");
    // var rect = elmnt.getBoundingClientRect();
    // console.log(rect.width, "px");
    // console.log(rect.height, "px");
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
      data: [
        "Due to compatibility problems (see below), it is safest to rely on only properties left, top, right, and bottom.",
        "The returned DOMRect object can be modified in modern browsers. This was not true with older versions which effectively returned DOMRectReadOnly. With IE and Edge, not being able to add missing properties to their returned ClientRect, object prevents backfilling x and y.",
        "Scripts requiring high cross-browser compatibility can use window.pageXOffset and window.pageYOffset instead of window.scrollX and window.scrollY. Scripts without access to these properties can use code like this:",
        "The returned value is a DOMRect object which is the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element. The result is the smallest rectangle which contains the entire element, with read-only left, top, right, bottom, x, y, width, and height properties describing the overall border-box in pixels. Properties other than width and height are relative to the top-left of the viewport.",
        "A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number. (See below.) Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax."
      ]
    };
  }
  componentDidMount() {
    // var elmnt = document.getElementById("all");
    // var rect = elmnt.getBoundingClientRect();
    // console.log(rect.width, "px");
    // console.log(rect.height, "px");
    this.timerID = setInterval(() => this.tick(), 1000);

    // this.getsize();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // getsize() {
  //   var elmnt = document.getElementById("all");
  //   var rect = elmnt.getBoundingClientRect();
  //   console.log(rect.width, "px");
  //   console.log(rect.height, "px");
  // }
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
          <button href="#" onClick={this.handleClickplus.bind(this)}>
            Click me +
          </button>
          <button href="#" onClick={this.handleClickminus}>
            Click me -
          </button>
          <Toggle />
        </div>
        {/* <div style="word-wrap:break-word;" > */}
        <TodoList stamp items={this.state.data} />
        {/* </div> */}
      </div>
    );
  }
}

export default CounterComponent;
