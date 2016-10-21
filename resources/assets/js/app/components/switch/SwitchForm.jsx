import React, { Component } from 'react';

import FileIndex from './FileIndex';


export default class SwitchForm extends Component {
  render () {
    return (<div className="form_switch">
      <h2 className="title-base">
        Formulario de trocas e devoluções
      </h2>
      <br/>
      <form>
        <div className="form_box">
          <label>nome completo*</label>
          <input type="text" placeholder="por favor digite seu nome"></input>
        </div>
        <div>
          <div className="form_box _half">
            <label>email*</label>
            <input type="email" placeholder="por favor, digite seu email"></input>
          </div>
          <div className="form_box _half">
            <label>telefone<small>(opcional)</small></label>
            <input type="tel" placeholder="por favor, digite seu email"></input>
          </div>
        </div>
        <div>
          <div className="form_box _tri">
            <label>cpf*</label>
            <input type="number" placeholder="por favor, digite seu cpf"></input>
          </div>
          <div className="form_box _tri">
            <label>nº do pedido*</label>
            <input type="number" placeholder="por favor, digite nº do pedido"></input>
          </div>
          <div className="form_box _tri">
            <label>código do produto*</label>
            <input type="text" placeholder="por favor, digite o código do pedido"></input>
          </div>
        </div>
        <div className="form_box _last">
          <label>motivo da troca*</label>
          <textarea
            placeholder="por favor, digite o motivo pelo qual está solicitando
                a troca ou a devolução do seu pedido">
              </textarea>
        </div>
        <FileIndex />
        <div className="form_control">
          <button type="submit" className="btn-other"> ok </button>
        </div>
      </form>
    </div>
    );
  }
}