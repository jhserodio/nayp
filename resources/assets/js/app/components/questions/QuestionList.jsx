import React, { Component } from 'react';

import Question from './Question';

export default class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: this.props.list
    };
  }

  itemToggle(itemId) {

    const clone = this.state.content;

    for (let i = 0; i < clone.length; i++) {


      if (itemId === clone[i].id
          && !clone[i].visibility) {
         clone[i].visibility = '_active';
       } else {
         clone[i].visibility = false;
       }

    }
    this.setState({
      content: clone
    });
  }

  render() {

    return (
      <div className="questions">
        {this.state.content.map( item =>

          <div className={`question ${item.visibility}`}
               onClick={() => this.itemToggle(item.id)}>
            <div className="_header">
              <span>
                {item.head}
              </span>
              <button className="btn-icon">
                <svg class="icon icon-down">
                  <use xlinkHref="public/svg/icons.svg#icon-down"></use>
                </svg>
              </button>
            </div>
            <div className="_main">
              {item.main.map( p =>
                <p className="_paragraph">
                  {p}
                </p>
              )}
            </div>
          </div>

        )}
      </div>
    );
  }

}
