import React, { Component } from 'react';

import Question from './Question';

export default class QuestionList extends Component {

  render() {
    return (
      <div className="questions">
        {this.props.list.map( item =>
          <Question title={item.head} content={item.main}/>
        )}
      </div>
    );
  }

}