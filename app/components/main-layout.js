import React from 'react';
import { Link } from 'react-router';
import Anime from 'react-anime';

const MainLayout = React.createClass({
  getInitialState () { 
    var ajs_state = localStorage.getItem( 'anime_state' ) || 'inactive';
    return {
      onActive: 'hide',
      anime_state: ajs_state
    }; 
  },
  getStates: function(){
    return {
      anime_state: this.state.anime_state,
      onActive: this.state.onActive
    }
  },
  showContents: function(){
    console.log('contents clicked');
    localStorage.setItem( 'anime_state', 'active' );
    this.setState({
      anime_state: 'active',
      onActive: 'reveal'
    })

    console.log(this.state.onActive);
  },
  displayCotentTop: function(){
    return 'primary-aside '+ ((this.state.onActive === 'reveal' ? 'show-top' : ''));
  },
  displayCotentBottom: function(){
    console.log('initial');
    console.log(this.state.onActive);
    return 'footer '+ ((this.state.onActive === 'reveal' ? 'show-bottom' : ''));
  },
  render: function() {

    return (
      <div className="app">
        <canvas id='canvas'></canvas>
        <div className="circle blur"></div>
        <div className="square blur"></div>
        <div className="layout_separator">
          <header className=''></header>
          
          <div className={this.displayCotentTop()}>
            <div className="header_wrapper">
                <div id="logo_name" className="sp"> 
                    <div id="rotator" className="sp">
                        <div id="expender" className="sp">
                
                        </div>
                    </div>
                    <div className="name_text">
                        
                        <span className="name">
                                han
                        </span>
                        <span className="first_margin">C</span>
                        
                        <span className="name second_margin">
                                oo
                        </span>
                        <span>W</span>
                        
                        <span className="name">
                                o
                        </span>
                        <span>R</span>
                    </div>
                </div>
                <ul className="main_menu">
                  <li><Link to="/about" activeClassName="active" onClick={this.showContents}>About</Link></li>
                  <li><Link to="/experiences" activeClassName="active" onClick={this.showContents}>Experience</Link></li>
                  <li><Link to="/skills" activeClassName="active" onClick={this.showContents}>Skills</Link></li>
                </ul>
              
            </div>
            
          </div>
          <main className="inner_contents">
            {this.props.children && React.cloneElement(this.props.children, {
              getStates: this.getStates,
              showContents: this.showContents
              })}
          </main>
          <div className={this.displayCotentBottom()}>
              {this.state.anime_state === 'inactive' ? (<Anime opacity={[0, 1]} translateY={'1em'} delay={1800} autoplay={true} duration={1000} >
                  <div>
                    <p>ReactJS - 2017</p>
                  </div>  
              </Anime>)
              : <Anime translateY={'1em'}>
                  <div>
                    <p>ReactJS - 2017</p>
                  </div>  
              </Anime>
              }
              
          </div>
        </div>
      </div>
    );
  }
});

export default MainLayout;
