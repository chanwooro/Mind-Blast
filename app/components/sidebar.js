import React, {Component} from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import ListData from '../container/listData'

class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickAdd: false
    }
  }
  render(){
    if(!this.props.listData.questions){
      return (<div></div>)
    }else{
      return (
      
        <div className="leftbar">
          <div className="header">
              <div className="headerName">Mind Blast</div>
          </div>
          <div className="rightMenu">
          <ul className="main-menu-wrapper">
            <li><a href="#" className="right-main-menu"onClick={()=>this.setState({clickMinus: !this.state.clickMinus, clickAdd: false})}><i className="fa fa-minus fa-lg" aria-hidden="true"></i></a></li>
            <li>
              <div className={this.state.clickMinus ? "dropdown-plus show" : "dropdown-plus"} >
                <a href="#">Section</a>
                <a href="#">Question</a>
              </div>
            </li>
            <li><a href="#" className="right-main-menu" onClick={()=>this.setState({clickAdd: !this.state.clickAdd, clickMinus: false})}><i className="fa fa-plus fa-lg" aria-hidden="true"></i></a></li>
            <li>
              <div className={this.state.clickAdd ? "dropdown-plus show" : "dropdown-plus"} >
                <a href="#">Section</a>
                <a href="#">Question</a>
              </div>
            </li>
           
          </ul>
          </div>
          <div className="listQuestions">
            <div className="listHeader selected">
              <i className="fa fa-tasks fa-lg" aria-hidden="true"></i>
              <span className="Q_title">Questions</span>
            </div>
            <ul>
              {this.props.listData.questions.map(data => <ListData key={data.id} id={data.id} contents={data.contents} />)}
            </ul>
          </div>
        </div>
      )
    }
  }
}



const mapStateToProps = (state) => ({
  listData: state.sideBarStatus
});


export default connect(mapStateToProps)(Sidebar);