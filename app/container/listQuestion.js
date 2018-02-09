import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'

let ListQuestion = ({ id, name }) => {
    return (
      <li id={id}>
        <i className="fa fa-quora" aria-hidden="true"></i> <span className="list_q_spacing">{name}</span>
      </li>
    )
}


export default ListQuestion;