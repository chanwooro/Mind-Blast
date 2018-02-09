import React, {Component} from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ListQuestion from '../container/listQuestion'
import {addNewFolder} from '../action/'

class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickMinus: false,
      clickAdd: false,
      mainMenu: '',
      selectedFoler: '',
      createFolder: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    console.log(folderName);
  }

  render(){
    if(!this.props.listQuestion.questions){
      return (<div></div>)
    }else{
      let folderName;
      return (
      
        <div className="leftbar">
          <div className="header">
              <div className="headerName">Mind Blast</div>
          </div>
          <div className="rightMenu">
            
          <ul className="main-menu-wrapper">
            <li><a href="#" className="right-main-menu" onClick={()=>this.setState({clickMinus: !this.state.clickMinus, clickAdd: false})}><i className="fa fa-minus fa-lg" aria-hidden="true"></i></a></li>
            <li>
              <div className={this.state.clickMinus ? "dropdown-plus show" : "dropdown-plus"} >
                <a href="#">Folder</a>
                <a href="#">Question</a>
              </div>
            </li>
            <li><a href="#" className="right-main-menu" onClick={()=>this.setState({clickAdd: !this.state.clickAdd, clickMinus: false})}><i className="fa fa-plus fa-lg" aria-hidden="true"></i></a></li>
            <li>
              <div className={this.state.clickAdd ? "dropdown-plus show" : "dropdown-plus"} >
                <a href="#" onClick={()=>this.setState({createFolder: true, clickAdd: false})}>Folder</a>
                <a href="#">Question</a>
              </div>
            </li>
          </ul>
          </div>
          {
            this.state.createFolder ?
            <div className="create_folder">
              <div className="cf_wrapper">
                <form onSubmit={this.handleSubmit}>
                  <i className="fa fa-folder fa-lg" aria-hidden="true"></i>
                  <input type="text" className="cf_input" autoFocus ref={input => {folderName = input}}/>
                  <div className="cf_buttons">
                    <span className="cf_create" onClick={()=>{this.props.createFolder(folderName.value, 1);this.setState({createFolder: false})}}>
                      <i className="fa fa-check fa-lg"></i>
                    </span>
                    <span className="cf_cancel" onClick={()=>this.setState({createFolder: false})}>
                      <i className="fa fa-close fa-lg"></i>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            : ''
          }
          <div className="listQuestions">{/*this whole listQuestions element should be mapped NEED TO WORK ON THIS LATER*/}
            <div className="List">
              <div className="listHeader selected">
                <i className="fa fa-folder fa-lg" aria-hidden="true"></i>
                <span className="Q_title">Questions</span>
              </div>
              <ul>
                {this.props.listQuestion.questions.map(data => <ListQuestion key={data.id} id={data.id} name={data.name} />)}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}



const mapStateToProps = (state) => {
  return {
    listQuestion: state.sideBarStatus
  }
}

const matchDispatchToProps = (dispatch) => {
 return bindActionCreators({
   createFolder: addNewFolder
  }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);