import React, { Component, Fragment } from 'react';
import { HashRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Home from './Home';
import Admin from './admin';
import Cart from './Cart';
import Detail from './Detail';
import Loading from './Loading';
import { getCartItemsCount } from '../utils';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { status, cartItemsCount, location } = this.props
    return (
      <Router>
        <Fragment>
          <nav>
            <div className="container">
              <ul className="nav-left">
                <li>
                  <NavLink exact to="/"><i className="iconfont icon-home"></i> 首页</NavLink>
                </li>
                <li>
                  <NavLink to="/admin"><i className="iconfont icon-admin"></i> 管理</NavLink>
                </li>
              </ul>
              <ul className="nav-right">
                <li>
                  <NavLink to="/cart"><i className="iconfont icon-cart"></i> 购物车 ({cartItemsCount})</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main-view">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/products/:id" component={Detail} />
              <Route path="/cart" component={Cart} />
              <Redirect to="/"/>
            </Switch>
            {status.code === -1 &&
            <Loading/>
            }
          </div>
          <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    cartItemsCount: getCartItemsCount(state)
  }
}

export default connect(mapStateToProps)(App)


