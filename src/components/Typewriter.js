import React from 'react';
import styled from 'styled-components';

const BlinkingCaret = styled.span`
  border-right: 6px solid ${props => (props.isBlink ? 'black' : 'transparent')};
  color: ${props =>
    props.substr.includes(props.value) ? '#36e1ea' : '#292929'};
  padding-right: ${props => (props.last ? '8px' : '0')};
`;

const Container = styled.div`
  font-family: 'Arvo', serif;
  overflow: hidden;
  font-size: ${props => (props.size ? props.size : '4em')};
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
      this.props.delay
    );
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
      <Container size={this.props.fontSize}>
        {letters.map((x, i) => {
          return (
            i < counter &&
            i < letters.length && (
              <BlinkingCaret
                value={x}
                key={i}
                substr={this.props.substr}
                last={i === letters.length - 1}
                isBlink={i === counter - 1 && isBlink}
              >
                {x}
              </BlinkingCaret>
            )
          );
        })}
      </Container>
    );
  };
}

export default Typewriter;

Typewriter.defaultProps = {
  time: 1000,
  phrase: 'Enter'
};
