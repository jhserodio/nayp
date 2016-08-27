import React, { Component } from 'react';

export default class Faq extends Component {
  render() {
    return (

      <div className="info-np">
        <div className="container">
          <h1 className="title-base">faq / perguntas frequentes</h1>
          <p>iste sed, dolores. Illo molestiae vitae repellat laudantium, rerum aut!</p>
          <div className="box-flexible">
            <div className="flexible-item">
              <div className="flexible-head">
                <span>
                  como efetuar um pagamento
                </span>
                <button className="btn-icon">
                  v
                </button>
              </div>
              <div className="flexible-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit quos minus quidem ratione porro sunt ex quae in aperiam,
                deleniti esse aliquam soluta, totam tenetur odit saepe vel quasi est?
              </div>
            </div>

            <div className="flexible-item">
              <div className="flexible-head">
                <span>
                  como efetuar um pagamento
                </span>
                <button className="btn-icon">
                  v
                </button>
              </div>
              <div className="flexible-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit quos minus quidem ratione porro sunt ex quae in aperiam,
                deleniti esse aliquam soluta, totam tenetur odit saepe vel quasi est?
              </div>
            </div>

            <div className="flexible-item">
              <div className="flexible-head">
                <span>
                  como efetuar um pagamento
                </span>
                <button className="btn-icon">
                  v
                </button>
              </div>
              <div className="flexible-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit quos minus quidem ratione porro sunt ex quae in aperiam,
                deleniti esse aliquam soluta, totam tenetur odit saepe vel quasi est?
              </div>
            </div>
          </div>

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
                <button type="submit" className="btn-other"> ok </button>
              </div>
            </form>
          </div>

        </div>
      </div>


    );
  }
}
