import React, { Component } from "react";
import "./TodoList.css";

// import TodoItem from "./TodoItem";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rect: {}
    };
    this.frame = React.createRef();
  }
  componentDidMount(rect) {
    // var elmnt = this.frame;
    console.log(this.frame.current);
    this.setState({
      rect: this.frame.current.getBoundingClientRect()

      // countobj: this.state.countobj + 1
    });
    // this.state.rect = this.frame.current.getBoundingClientRect();
    // rect = this.frame.current.getBoundingClientRect();
    console.log(rect);
    // console.log(rect.width, "px");
    // console.log(rect.height, "px");
    // this.timerID = setInterval(() => this.tick(), 1000);

    // this.getsize();
  }
  handleClickplus(e) {
    this.setState({
      count: this.state.count + 1
      // countobj: this.state.countobj + 1
    });
    console.log(this);
  }
  changesize = rect => {
    if (rect.width > 854) {
      return "";
    } else {
      return "frame";
    }
  };
  render() {
    const { item } = this.props;
    return (
      <div>
        <div>
          <h3 ref={this.frame} className={this.changesize(this.state.rect)}>
            {" "}
            {item}{" "}
          </h3>
          ;
        </div>
      </div>
    );
  }
}

export default TodoItem;
