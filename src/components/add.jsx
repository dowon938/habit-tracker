import React, { PureComponent, createRef } from 'react';

class Add extends PureComponent {
  formRef = createRef();
  inputRef = createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    console.log('add');
    return (
      <div>
        <form ref={this.formRef} className="addBar" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="addBar-input"
            placeholder="Habit"
          />
          <button className="addBar-btn">Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
