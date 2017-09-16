import React from 'react';

const InputWrapper = props => {
  return (
    <div>
      {React.Children.map(props.children, (child, index) => {
        if (index === props.step) return React.cloneElement(child);
      })}
      <button onClick={props.decrease}>decrease</button>
      <button onClick={props.increase}>increase</button>
    </div>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 2,
      comments: '',
      step: 0
    };
  }

  increase = () => {
    this.setState({ step: this.state.step + 1 });
  };

  decrease = () => {
    this.setState({ step: this.state.step - 1 });
  };

  render = () => {
    return (
      <InputWrapper step={this.state.step} increase={this.increase} decrease={this.decrease}>
        <div>0</div>
        <div>1</div>
      </InputWrapper>
    );
  };
}

export default Input;
