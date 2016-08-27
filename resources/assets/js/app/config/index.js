import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Info from '../components/info/Info.jsx';
import Faq from '../components/faq/Faq.jsx';
import Order from '../components/order/Order.jsx';
import Sizes from '../components/sizes/Sizes.jsx';
import Contact from '../components/contact/Contact.jsx';


export class RouteConfig extends Component {
  render() {
    return  (
      <Router history={hashHistory}>
        <Route path="/" component={this.props.main} >
          <IndexRoute component={Info} />
          <Route path="/faq" component={Faq} />
          <Route path="/order" component={Order} />
          <Route path="/sizes" component={Sizes} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}
