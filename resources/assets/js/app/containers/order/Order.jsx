import React, { Component } from 'react';

import FormInput from '../../components/formInput/FormInput';

export default class Order extends Component {
  render() {
    return (
      <div className="info-np">
          <div className="container">
            <h1 className="title-base">consulte o status do seu pedido</h1>
            <br />
            <div className="form-status-pedido">
              <form>
                <FormInput label="Email"
                           message="Digite seu email"
                           type="email"
                           isRequired/>

                <FormInput label="numero da ordem"
                           message="por favor digite o numero do seu pedido"
                           type="text"
                           isRequired/>

                <div className="form_control">
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
