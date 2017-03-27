import React, { Component } from 'react';

import SwitchForm from './SwitchForm';
import QuestionList from '../../components/questions/QuestionList';

// data
import { switchTerms } from './mock';

export default class Switch extends Component {

  constructor () {
    super();

    this.state = {
      questions: switchTerms.load()
    }
  }

  render() {

    return (
      <div className="_content">
        <div>
          <h2 className="title-base">
            Politicas de trocas e devoluções
          </h2>
          <p>
            Nosso objetivo é proporcionar uma relação de confiança e respeito,
            para que sua satisfação ao adquirir nossos produtos seja plena.
            Mas, se por algum motivo você não tenha ficado satisfeito,
            será possível solicitar a troca ou devolução do produto.
            Para isso, descrevemos logo abaixo nossa Política de Trocas e Devoluções,
            tendo como orientação o Código de Defesa do Consumidor:
          </p>
        </div>

        <QuestionList list={this.state.questions}/>

        <br/>
        <br/>

        <SwitchForm />

      </div>
    );
  }
}
