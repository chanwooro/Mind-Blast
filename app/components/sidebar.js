import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import ListData from '../container/listData'

console.log('test')
let SidebarH = ({listData}) => {
  console.log(listData);
  var list = listData.questions
  if (!list){
    return (<div></div>)
  }else{
    console.log(list);
    return (
      
      <div className="leftbar">
        <div className="header">
            <div className="headerName">Mind Blast</div>
        </div>
        <div className="listQuestions">
          <div className="listHeader selected">
            <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
            <span className="Q_title">Questions</span>
          </div>
          <ul>
            {list.map(data => <ListData key={data.id} id={data.id} contents={data.contents} />)}
          </ul>
        </div>
      </div>
    )
  }
    
}

const mapStateToProps = (state) => ({
  listData: state.sideBarStatus
});

const Sidebar = connect(mapStateToProps)(SidebarH);
export default Sidebar;