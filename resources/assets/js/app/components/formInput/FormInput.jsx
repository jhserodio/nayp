import React, { Component } from 'react';

export default class FormInput extends Component {

  static defaultProps = {
    isRequired: false
  }

  state = {
      value: "",
      type: this.props.type,
      grid: this.props.grid,
      validate: "",
      isRequired: this.props.isRequired
  }

  validate(event) {
    let targetValue = event.target.value;

    if (this.state.isRequired){
      // require verify
      if (targetValue) {
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
        } else {
          this.setState({validate: ""});
        }

      } else {
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
