import React, { Component } from 'react';

export default class Order extends Component {
  render() {
    return (

      <div className="info-np">
        <div className="container">
          <h1 className="title-base">consulte o status do seu pedido</h1>

          <div className="form-status-pedido">
            <form>
              <div className="form-box">
                <label>email</label> <span className="alert-error"> digite um email valido</span>
                <input type="email" placeholder="por favor digite seu email" />
              </div>
              <div className="form-box">
                <label>numero da ordem</label>
                <input type="text" placeholder="por favor digite o numero do seu pedido" />
              </div>
              <div className="form-control">
                <button type="submit" className="btn-other"> ok </button>
              </div>
            </form>
          </div>

          <div className="status-error">
            <p>
              <span className="alert-error">
                Lametamos mas não encontramos seu pedido em nossa base de dados
              </span>
              <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis obcaecati culpa necessitatibus, impedit in error voluptatem quos eligendi
                quisquam quo ex excepturi doloribus quod nihil cumque accusamus tempora fugit eius.
            </p>
          </div>
        </div>
      </div>

    );
  }
}
