import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  addHabit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return (item = { ...habit, count: habit.count + 1 });
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return (item = { ...habit, count: count < 0 ? 0 : count });
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    console.log(habits);
    this.setState({ habits });
  };

  resetAll = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return (habit = { ...habit, count: 0 });
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log('app');
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.addHabit}
        ></Habits>
        <Reset habits={this.state.habits} onReset={this.resetAll} />
      </>
    );
  }
}

export default App;
