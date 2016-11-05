import React, { Component } from 'react';
import GoogleMaps from '../../components/googleMaps/GoogleMaps.jsx';

export default class Contact extends Component {
  render() {
    return (

      <div className="_content">
        <h1 className="title-base">Contatos e horários</h1>
        <div className="capitalize">
          <br />
          <h2 className="title-small">
            loja Online
          </h2>

          <p className="_paragraph">
            <span className="_breakout">
              para outras informações, envie sua mensagem através do formulário,
              que responderemos brevemente.
            </span>
            horários de atendimento online: <br />
            <span>
              segunda-feira - sexta-feira: 9:00 AM - 9:00 PM (UTC-03:00 / brasília)
            </span>
            <br />
            <span>
              sábado - domingo: 9:00 AM - 4:00 PM (UTC-03:00 / brasília)
            </span>
          </p>
        </div>

        <div className="form-contatos">
          <form>
            <div className="form_box">
              <label>nome*</label>
              <input type="email" placeholder="por favor digite seu primeiro nome" />
            </div>
            <div className="form_box">
              <label>sobrenome*</label>
              <input type="email" placeholder="por favor digite seu sobrenome" />
            </div>
            <div className="form_box">
              <label>email</label> <span className="alert-error"> digite um email valido </span>
              <input type="email" placeholder="por favor digite seu email" />
            </div>
            <div className="form_box">
              <label>telefone</label>
              <input type="email" placeholder="+00 (00) 0000-0000" />
            </div>
            <div className="form_box">
              <label>mensagem</label>
              <textarea name="mensagem"></textarea>
            </div>
            <div className="form_control">
              <button type="submit" className="btn-other"> ok </button>
            </div>
          </form>
        </div>

        <div className="capitalize">
          <h2 className="title-small">
            loja física
          </h2>

          <p className="_breakout">
            cnpj: 00.000/0001-00 <br />
            r. comendador araújo, 268, loja ca06 - shopping omar
            00000-000, curitiba - paraná, brasil
          </p>
          <p className="_breakout">
            horários de atendimento loja física: <br />
            <span>
              segunda-feira - sexta-feira: 9:00 AM - 8:00 PM (UTC-03:00 / brasília)
            </span>
            <br />
            <span>
              sábado: 9:00 AM - 6:00 PM (UTC-03:00 / brasília)
            </span>
          </p>

        </div>

        <GoogleMaps></GoogleMaps>

      </div>

    );
  }
}
