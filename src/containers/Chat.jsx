import React from 'react';

class ChatMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      // Once authenticated, instantiate Firechat with the logged in user
      if (user) {
        initChat(user);
      }
    });
  }

  const initChat = (user) => {
    // Get a Firebase Database ref
    var chatRef = firebase.database().ref("chat");

    // Create a Firechat instance
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

    // Set the Firechat user
    chat.setUser(user.uid, user.displayName);
  };

  render() {
    return (
      <div id="firechat-wrapper">
      </div>
    );
  }
}

export default ChatMessage;
