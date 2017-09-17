import React from 'react';
import ChatBubble from 'react-chat-bubble';
import TextField from 'material-ui/TextField';

class Chat extends React.Component {
  state = {
    input: '',
    messages: [
      {
        type: 1,
        image: '',
        text: 'Hello, how can I help?'
      }
    ]
  };

  sendMessage = e => {
    if (e.key === 'Enter') {
      this.setState({
        input: '',
        messages: [
          ...this.state.messages,
          { type: 0, image: this.props.imageUrl, text: this.state.input }
        ]
      });
    }
  };

  render() {
    return (
      <div style={{ height: '360px', overflow: 'scroll' }}>
        <ChatBubble messages={this.state.messages} />
        <TextField
          value={this.state.input}
          style={{ margin: 'auto', width: '100%' }}
          onChange={(event, newValue) => this.setState({ input: newValue })}
          onKeyDown={this.sendMessage}
        />
      </div>
    );
  }
}
export default Chat;
