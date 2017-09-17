import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

class Header extends Component {
  handleToggle = () => {
    this.props.handleChangeRequestNavDrawer();
  };

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;
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
    let leftBurger = <div style={{ width: 20 }} />;
    leftBurger = (
      <IconButton
        style={style.menuButton}
        onClick={handleChangeRequestNavDrawer}
      >
        <ActionMenu />
      </IconButton>
    );
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
    const button = (
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
      <AppBar
        style={{ ...styles, ...style.appBar }}
        title={
          <Logo onClick={() => this.props.history.push('/daily')}>Log(me)</Logo>
        }
        titleStyle={{}}
        iconElementLeft={leftButtons}
        iconElementRight={button}
      />
    );
  }
}

export default withRouter(Header);
