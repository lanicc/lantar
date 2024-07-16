import React from 'react';
import {Icon, Menu, Popover} from 'antd';

import {enquireScreen} from 'enquire-js';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({menuMode: b ? 'inline' : 'horizontal'});
    });
  }

  render() {
    const {menuMode, menuVisible} = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav" />
    );

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
      </div>
    );
  }
}

export default Header;
