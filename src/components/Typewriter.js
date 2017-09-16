import React from "react";
import styled from "styled-components";

const BlinkingCaret = styled.span`
  border-right: 3px solid ${props => (props.isBlink ? "black" : "transparent")};
`;

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typingTimer: null,
      blinkingCaretTimer: null,
      isBlink: false,
      counter: 0,
      letters: []
    };
  }

  componentDidMount = () => {
    const letters = [...this.props.phrase];
    let typingTimer = setInterval(this.tick, this.props.time);
    let blinkingCaretTimer = setInterval(this.handleBlink, 500);
    setTimeout(
      () => this.setState({ typingTimer, blinkingCaretTimer, letters }),
      3000
    );
  };

  componentWillUnmount = () => {
    this.clearInterval(this.state.typingTimer);
  };

  tick = () => {
    if (this.state.counter < this.state.letters.length) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  handleBlink = () => {
    this.setState({ isBlink: !this.state.isBlink });
  };

  render = () => {
    const { letters, counter, isBlink } = this.state;
    return (
      <div style={{ fontFamily: "Bungee Shade", overflow: "hidden" }}>
        {letters.map((x, i) => {
          return (
            i < counter &&
            i < letters.length &&
            <BlinkingCaret key={i} isBlink={i === counter - 1 && isBlink}>
              {x}
            </BlinkingCaret>
          );
        })}
      </div>
    );
  };
}

export default Typewriter;

Typewriter.defaultProps = {
  time: 1000,
  phrase: "Enter"
};
