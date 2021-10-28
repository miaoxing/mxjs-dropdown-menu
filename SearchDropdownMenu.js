/* global $ */
import { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import {withRouter} from 'react-router-dom';
//import 'load-query';
import PropTypes from 'prop-types';
import appendUrl from 'append-url';

class SearchDropdownMenu extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    history: PropTypes.object,
    children: PropTypes.node,
  };

  componentDidMount() {
    //$('.js-form').loadQuery();
  }

  handleSubmit(e) {
    // 关闭搜索窗口
    $('[data-toggle="dropdown"]').trigger('click.fancy.dropdownmenu.toggle');
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(e);
      return;
    }

    const location = this.props.history.location;
    const url = appendUrl(location.pathname + location.search, $('.js-form').serialize());
    this.props.history.push(url);
  }

  render() {
    return <DropdownMenu rightLink={this.props.rightLink}>
      <form className="js-form form form-inset mt-4" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-body">
          {this.props.children}
        </div>
        <div className="form-group form-footer">
          <button type="submit" className="btn btn-brand btn-primary btn-block">搜索</button>
        </div>
      </form>
    </DropdownMenu>;
  }
}

SearchDropdownMenu.propTypes = {
  rightLink: PropTypes.PropTypes.node,
};

export default withRouter(SearchDropdownMenu);
