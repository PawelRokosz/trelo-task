import React, { Component } from 'react';

import List from './List';
import tasks from './data/data.json';

class Lists extends Component {

  state = {
    tasks: [],
    currentTask: {
      "id": null,
      "task": ""
    },
    dropTask: {
      "id": null,
      "task": ""
    }
  }

  handleDragStart(id, myTask) {
    this.setState({
      currentTask: {
        "id": id,
        "task": myTask
      },
    }, () => {
      console.log(this.state);
    });
  }

  handleDrop(id, myTask) {
    this.setState({
      dropTask: {
        "id": id,
        "task": myTask
      }
    }, () => {
      console.log(this.state);
    });
  }

  componentWillMount() {
    this.setState({
      tasks
    })
  }

  render() {
    let tasks = this.state.tasks;

    let lists = tasks.map((list, index) => {
      return <List key={index} board={list["board"]} tasks={list["tasks"]} handleDragStart={(id, myTask) => this.handleDragStart(id, myTask)} handleDrop={(id, myTask) => this.handleDrop(id, myTask)}/>
    });

    return (
      <div className="lists">

        {lists}

      </div>
    );
  }
}

export default Lists;
