import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="lists__task" draggable>{this.props.task}</div>
    );
  }
}

export default Task;
