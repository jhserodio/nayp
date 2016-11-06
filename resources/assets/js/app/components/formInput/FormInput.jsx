import React, { Component } from 'react';

export default class FormInput extends Component {

  static defaultProps = {
    isRequired: false
  }

  state = {
      value: "",
      type: this.props.type,
      minLength: this.props.minLength,
      maxLength: this.props.maxLength,
      grid: this.props.grid,
      validate: "",
      isRequired: this.props.isRequired
  }

  validate(event) {
    let targetValue = event.target.value;

      if (targetValue) {
        // mail type verify
        if (this.state.type === "email") {
          let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
          if (!(re.test(targetValue))) {
            this.setState({
              validate: "_error",
              validateMessage: "digite um email valido"
            });
          } else {
            this.setState({
              validate: ""
            });
          }
        } else if (targetValue.length < this.state.minLength) {
          this.setState({
            validate: "_error",
            validateMessage: `o campo deve conter no minimo ${this.state.minLength} caracteres`
          });
        } else if (targetValue.length > this.state.maxLength) {
          this.setState({
            validate: "_error",
            validateMessage: `o campo deve conter no maximo ${this.state.maxLength} caracteres`
          });
        } else {
          this.setState({validate: ""});
        }

      } else {
        if(this.state.isRequired) {
          this.setState({
            validate: "_error",
            validateMessage: "campo obrigatório"
          });
        }
      }

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    var formClass = `form_box ${this.state.grid} ${this.state.validate}`;

    return (
      <div className={formClass}>
        <label>{this.props.label}</label>
        <span className="alert-error">
          {this.state.validateMessage}
        </span>
        <input type={this.props.type}
               placeholder={this.props.message}
               value={this.state.value}
               onChange={::this.handleChange}
               onBlur={::this.validate}/>
      </div>
    );
  };


}
