import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navegation extends Component {

  render () {
    return (
      <div className="megamenu app-navegation">
        <div className="container">
          <ul className="menu menu-info">
            <li><IndexLink to="/">sobre</IndexLink></li>
            <li><Link to="/order">pedidos</Link></li>
            <li><Link to="/sizes">tamanhos</Link></li>
            <li><Link to="/faq">faq</Link></li>
            <li><Link to="/contact">contatos</Link></li>
          </ul>
        </div>
      </div>
    );
  }

}
