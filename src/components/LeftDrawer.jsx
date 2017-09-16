import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import PersonIcon from 'material-ui/svg-icons/social/person';
import ChartIcon from 'material-ui/svg-icons/social/poll';
import { spacing, typography } from 'material-ui/styles';

class LeftDrawer extends Component {
  render() {
    const { drawerOpen } = this.props;
    const styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: '#00bcd4',
        paddingLeft: 40,
        height: 56,
      },
      welcome: {
        div: {
          padding: '15px 15px 20px 0',
          height: 45,
        },
        span: {
          paddingTop: 12,
          paddingLeft: 40,
          display: 'block',
          fontWeight: 300,
        },
      },
    };

    return (
      <Drawer
        docked
        open={drawerOpen}
        style={{ width: 230 }}
      >
        <div style={styles.logo}>
          Welcome back!
        </div>
        <div>
          <MenuItem
            key={0}
            style={{fontSize: 14}}
            primaryText={'Daily Journal Entry'}
            leftIcon={(<PersonIcon/>)}
            containerElement={<Link to={'/daily'} />}
          />
          <MenuItem
            key={1}
            style={{fontSize: 14}}
            primaryText={'Mood Chart'}
            leftIcon={(<ChartIcon/>)}
            containerElement={<Link to={'/chart'} />}
          />
        </div>
      </Drawer>
    );
  }
}

export default LeftDrawer;
