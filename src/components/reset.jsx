import React, { PureComponent } from 'react';

class Reset extends PureComponent {
  resetAll = () => {
    this.props.onReset();
  };
  render() {
    console.log('reset');
    return (
      <div>
        <button className="reset" onClick={this.resetAll}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Reset;
