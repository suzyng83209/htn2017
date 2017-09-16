import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalStepper from './containers/HorizontalStepper';
import { LARGE, SMALL } from 'material-ui/utils/withWidth';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Header from './components/Header.jsx';
import Test from './test';
import LeftDrawer from './components/LeftDrawer.jsx';
import Input from './components/Input';
import MoodChart from './containers/MoodChart';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ drawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  onOverlayClick = () => {
    this.setState({ drawerOpen: false });
  };

  renderLeftDrawer() {
    return <LeftDrawer drawerOpen={this.state.drawerOpen} />;
  }

  render() {
    const drawerOpen = this.state.drawerOpen;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: drawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        paddingLeft: drawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      <MuiThemeProvider>
        <div>
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
          />
          {this.renderLeftDrawer()}
          <div style={styles.container} onClick={this.onOverlayClick}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/daily" component={HorizontalStepper} />
              <Route path="/input" component={Input} />
              <Route path="/chart" component={MoodChart} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
