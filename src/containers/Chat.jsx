import React from 'react';
import { Launcher } from 'react-chat-window';

const image =
  'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  _onMessageWasSent = message => {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  };

  _sendMessage = text => {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text }
          }
        ]
      });
    }
  };

  render = () => (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: ''
        }}
        onMessageWasSent={this._onMessageWasSent}
        messageList={this.state.messageList}
      />
    </div>
  );
}
