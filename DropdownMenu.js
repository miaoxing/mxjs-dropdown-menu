// TODO
// 1. 移除 jQuery
// 2. 引入类库
import React from 'react';
//import 'public/comps/dropdown-menu/dropdown-menu.css';
//import 'public/comps/dropdown-menu/dropdown-menu';
import PropTypes from 'prop-types';

class DropdownMenu extends React.Component {
  static propTypes = {
    rightLink: PropTypes.node,
    children: PropTypes.node,
  };

  componentDidMount() {
    //$('[data-toggle="dropdown"]').dropdownmenu();
  }

  render() {
    return <div className="filter-dropdown nav-dropdown">
      <ul className="nav-tabs tabs-justified border-y">
        <li className="dropdown">
          <a className="text-active-primary" data-toggle="dropdown" data-target="#search">
            <span>搜索</span>&nbsp;&nbsp;
            <i className="icon small icon-chevron-down"/>
          </a>
        </li>
      </ul>
      {this.props.rightLink && <span className="center-right mr-3">{this.props.rightLink}</span>}
      <div className="menu-content">
        <div id="search" className="dropdown-menu fade border-bottom">
          <div className="menu sub">
            {this.props.children}
          </div>
        </div>
      </div>
    </div>;
  }
}

export default DropdownMenu;
