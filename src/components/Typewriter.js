import React from 'react';
import styled from 'styled-components';

const BlinkingCaret = styled.span`
  border-right: 4px solid ${props => (props.isBlink ? 'black' : 'transparent')};
  color: ${props =>
    props.substr.includes(props.value) ? '#36e1ea' : '#292929'};
  padding-right: ${props => (props.last ? '8px' : '0')};
`;

const Container = styled.div`
  font-family: 'Arvo', serif;
  overflow: hidden;
  padding: 16px;
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
      letters: [...props.phrase]
    };
  }

  componentDidMount = () => {
    const { delay, time, sustained } = this.props;
    setTimeout(
      () =>
        this.setState({
          typingTimer: setInterval(this.tick, time),
          blinkingCaretTimer: setInterval(this.handleBlink, 500)
        }),
      delay
    );
  };

  tick = () => {
    if (this.state.counter < this.state.letters.length) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  handleBlink = () => {
    if (this.state.letters.length) {
      this.setState({ isBlink: !this.state.isBlink });
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.state.typingTimer);
    clearInterval(this.state.blinkingCaretTimer);
  };

  render = () => {
	const { letters, counter, isBlink } = this.state;
	if (!this.props.sustained) {
		clearInterval(this.state.blinkingCaretTimer);
	}
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
