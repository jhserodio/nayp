import React, { Component } from 'react';

import FileIndex from './FileIndex';
import FormInput from '../../components/formElements/FormInput';
import TextArea from '../../components/formElements/TextArea';

export default class SwitchForm extends Component {
  render () {
    return (<div className="form_switch">
      <h2 className="title-base">
        Formulario de trocas e devoluções
      </h2>
      <br/>
      <form>
        <div>
          <FormInput name="switch_firstname"
                       label="nome"
                       grid="_half"
                       type="text"
                       minLength={3}
                       message="por favor digite seu primeiro nome"
                       isRequired/>

            <FormInput name="switch_lastname"
                       label="sobrenome"
                       grid="_half"
                       type="text"
                       minLength={3}
                       message="por favor digite seu ultimo nome"
                       isRequired/>
        </div>
        <div>
           <FormInput name="switch_email"
                       label="Email"
                       grid="_half"
                       type="email"
                       message="Digite seu email"
                       isRequired/>

            <FormInput name="switch_tel"
                       label="telefone"
                       grid="_half"
                       type="tel"
                       message="digite um telefone para contato"/>
        </div>
        <div>
          <FormInput name="switch_cpf"
                     label="cpf"
                     grid="_tri"
                     type="text"
                     mask="999.999.999-99"
                     message="por favor digite o nº do seu CPF"
                     isRequired/>

          <FormInput name="switch_order"
                     label="nº do pedido"
                     grid="_tri"
                     type="text"
                     message="por favor digite o nº do pedido"
                     isRequired/>

          <FormInput name="switch_code"
                     label="cod. pedido"
                     grid="_tri"
                     type="text"
                     message="por favor digite o código do pedido"
                     isRequired/>
        </div>

        <TextArea name="switch_messsage"
                  label="motivo da troca"
                  grid="_last"
                  minLength={10}
                  message="por favor, digite o motivo pelo qual está solicitando a troca/devolução" 
                  isRequired/>
      
        <FileIndex />
        <div className="form_control">
          <button type="submit" className="btn-other"> ok </button>
        </div>
      </form>
    </div>
    );
  }
}
