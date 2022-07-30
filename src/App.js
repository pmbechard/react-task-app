import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      task: { text: '', id: uniqid() },
      editing: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
      editing: null,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.editing) {
      const newTasks = this.state.tasks.map((task) => {
        if (task === this.state.editing)
          task.text = e.target.parentNode.parentNode.previousSibling.value;
        return task;
      });
      this.setState({
        tasks: newTasks,
        editing: null,
      });
    } else if (this.state.task.text) {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: { text: '', id: uniqid() },
        editing: null,
      });
    }
  };

  onDelete = (e, key) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => item.id !== key),
      editing: null,
    });
  };

  onEdit = (e, key) => {
    this.setState({
      editing: this.state.tasks.filter((item) => item.id === key)[0],
    });
  };

  render() {
    const { tasks, task, editing } = this.state;
    return (
      <Container className='jumbotron main-content'>
        <h1>Task List</h1>
        <Card className='text-center p-2 w-50'>
          <Form onSubmit={(e) => this.onSubmitTask(e)}>
            <Form.Label htmlFor='taskInput'>Enter task</Form.Label>
            <Form.Control
              className='mt-3 mb-3'
              type='text'
              id='taskInput'
              value={task.text}
              onChange={this.handleChange}
            />
            <button className='btn btn-warning' type='submit'>
              Add task
            </button>
          </Form>
        </Card>
        <div>
          <Overview
            tasks={tasks}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            onSubmitTask={(e) => this.onSubmitTask(e)}
            editing={editing}
          />
        </div>
      </Container>
    );
  }
}

export default App;
