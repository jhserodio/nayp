import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (

      <div className="info-np">
        <div className="container">
          <h1 className="title-base">Contato</h1>
          <br />
          <br />
          <p>
            <strong>email: </strong>
            email@contato.com.br
          </p>
          <p>
            <strong>telefone: </strong>
            +55 (41) 9999-9999
          </p>



          <div className="form-contatos">
            <form>
              <div className="form-box">
                <label>nome</label>
                <input type="email" placeholder="por favor digite seu nome" />
              </div>
              <div className="form-box">
                <label>email</label> <span className="alert-error"> digite um email valido </span>
                <input type="email" placeholder="por favor digite seu email" />
              </div>
              <div className="form-box">
                <label>telefone</label>
                <input type="email" placeholder="+00 (00) 0000-0000" />
              </div>
              <div className="form-box">
                <label>mensagem</label>
                <textarea name="mensagem"></textarea>
              </div>
              <div className="form-control">
                <button type="submit"  className="btn-other"> ok </button>
              </div>
            </form>
          </div>

        </div>
      </div>

    );
  }
}
