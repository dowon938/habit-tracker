import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('navbar');
    return (
      <div>
        <header className="navbar">
          <span className="navbar-icon">
            <i className="fas fa-book-reader"></i>
          </span>
          <span>Habit Tracker</span>
          <span className="navbar-status">{this.props.totalCount}</span>
        </header>
      </div>
    );
  }
}

export default Navbar;
