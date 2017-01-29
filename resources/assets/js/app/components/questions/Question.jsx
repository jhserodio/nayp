import React from 'react';

const Question = props => {

  let visibility = props.visibility ? "_active " : "";

  const toggle = () => {
    props.onToggle(props.index);
    console.log(props.visibility);
  }

  return (
        <div className=" question"
             onClick={toggle}>
          <div className="_header">
            <span>
              {props.title}
            </span>
            <button className="btn-icon">
              v
            </button>
          </div>
          <div className="_main">
            {props.content.map( item =>
              <p className="_paragraph">
                {item}
              </p>
            )}
          </div>
        </div>
  );
}

export default Question;
