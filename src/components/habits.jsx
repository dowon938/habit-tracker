import React, { Component } from 'react';
import Add from './add';
import Habit from './habit';

class Habits extends Component {
  render() {
    console.log('habits');
    return (
      <div>
        <Add onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Habits;
