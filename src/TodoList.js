import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
export class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.frame = React.createRef();
  // }
  // componentDidMount() {
  //   // var elmnt = this.frame;
  //   console.log(this.frame.current);
  //   // var rect = this.frame.current.getBoundingClientRect();
  //   // console.log(rect);
  //   // console.log(rect.width, "px");
  //   // console.log(rect.height, "px");
  //   // this.timerID = setInterval(() => this.tick(), 1000);

  //   // this.getsize();
  // }
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(items => {
          return <TodoItem key={items} item={items} />;
        })}
      </div>
    );
  }
}

export default TodoList;
