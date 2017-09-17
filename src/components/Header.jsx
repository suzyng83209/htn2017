import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import Chatbox from '../containers/Chat';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chat from 'material-ui/svg-icons/notification/sms';

const Logo = styled.div`
  display: flex;
  font-family: 'Arvo', serif;
  font-size: '4em';
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const ChatBubble = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 2em;
  margin: 100px;
  cursor: pointer;
  border-radius: 50%;
  background: #36e1ea;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openChat: false,
      user: [{}]
    };
  }

  actions = [
    <FlatButton label="Close" onClick={this.handleChatClose} />,
  ];

  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.setState({ user: (user || {}).providerData });
    });
  };

  handleChatClose = () => {
    this.setState({ openChat: false });
  };
  handleChatOpen = () => {
    this.setState({ openChat: true });
  };

  render() {
    const { styles } = this.props;
    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        backgroundColor: '#36e1ea'
      },
      menuButton: {
        marginLeft: 30
      },
      iconsLeftContainer: {
        marginRight: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      },
      button: {
        color: 'white'
      }
    };
    const leftButtons = (
      <div>
        <FlatButton
          style={style.button}
          containerElement={<Link to="/daily" />}
          label={'Daily'}
        />
        <FlatButton
          style={style.button}
          containerElement={<Link to="/chart" />}
          label={'Chart'}
        />
      </div>
    );

    const button =
      this.state.user && this.state.user.length ? (
        <FlatButton
          style={style.button}
          onClick={() => auth.signOut().then(() => console.log('done'))}
          label={'Logout'}
        />
      ) : (
        <div>
          <FlatButton
            style={style.button}
            containerElement={<Link to="/login" />}
            label={'Login'}
          />
          <FlatButton
            style={style.button}
            containerElement={<Link to="/signup" />}
            label={'Sign Up'}
          />
        </div>
      );
    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          title={
            <Logo onClick={() => this.props.history.push('/')}>Log(me)</Logo>
          }
          titleStyle={{}}
          iconElementLeft={leftButtons}
          iconElementRight={button}
        />
        <Dialog
          title={`${this.state.user[0].displayName}'s Chat`}
          actions={this.actions}
          modal={true}
          open={this.state.openChat}
          onRequestClose={this.handleChatClose}
        >
          <Chatbox imgUrl={this.state.user[0].photoURL} />
        </Dialog>
        <ChatBubble onClick={this.handleChatOpen}>
          <Chat />
        </ChatBubble>
      </div>
    );
  }
}

export default withRouter(Header);
