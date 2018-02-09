import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import ListQuestion from '../container/listQuestion'

let ListQuestion = ({ id, name, questions }) => {
    return (
      <div className="List">
              <div className="listHeader selected">
                <i className="fa fa-folder fa-lg" aria-hidden="true"></i>
                <span className="Q_title">{{name}}</span>
              </div>
              <ul>
                {questions.map(data => <ListQuestion key={data.id} id={data.id} contents={data.contents} />)}
              </ul>
      </div>
    )
}


export default ListQuestion;