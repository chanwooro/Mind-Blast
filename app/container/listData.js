import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'

let ListData = ({ id, contents }) => {
  console.log(id);
  console.log(contents);
    return (
      <li id={id}>
        <i className="fa fa-quora" aria-hidden="true"></i> <span className="list_q_spacing">{contents}</span>
      </li>
    )
}


export default ListData;