import React, { Component } from 'react';

// data
import { faq } from './mock';

import QuestionList from '../../components/questions/QuestionList';


export default class Faq extends Component {

  constructor () {
    super();

    this.state = {
      questions: faq.load()
    }
  }

  render() {
    return (
      <div className="_content">
        <h1 className="title-base">faq / perguntas frequentes</h1>
        <p>
          Olá, abaixo você encontrará as respostas às dúvidas mais frequentes dos nossos clientes,
          caso não encontre a informação que procura, entre em contato conosco clicando

          <a href="#"> aqui. </a>
        </p>

        <QuestionList list={this.state.questions} />

      </div>

    );
  }
}
