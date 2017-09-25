import React from 'react';
import Anime from 'react-anime';

const UserProfile = React.createClass({
  getInitialState () {
    var parentStates = this.props.getStates();
    var current_history;
    if(parentStates.anime_state !== 'inactive' && parentStates.onActive !== 'hide'){
      current_history = true;
    }else{
      current_history = false;
    }
    return {
      onLoad: false,
      anime_state: parentStates.anime_state,
      show_history: current_history
    }; 
  },
  initialChecker : function(){
    var parentStates = this.props.getStates();
    this.state.onLoad = true;
    if(!this.current_history){
      setTimeout(function(){
        this.props.showContents();
        this.setState({
          show_history: true
        });
      }.bind(this), 2500);
    }
  },
  showSectors : function(){
    return 'experience_history ' + (this.state.show_history ? 'experience_history show' : 'experience_history');
  },
  render: function() {
    if(!this.state.onLoad){
      console.log('history ' +this.state.show_history);
      this.initialChecker();
    }
    return (
      <div className={this.showSectors()}>
        <Anime delay={2000} translateY={'3em'} translateX={'-12.5em'}>
          <div className="history_section">
            <div className="history_header">2015</div>
            <div className="history_object"></div>
          </div>
        </Anime>
        <Anime delay={2000} translateX={'-5em'}>
          <div className="history_section">
            <div className="history_header">2016</div>
            <div className="history_object"></div>
          </div>
        </Anime>
        <Anime delay={2000} translateY={'3em'} translateX={'2.5em'}>
          <div className="history_section">
            <div className="history_header">2017</div>
            <div className="history_object"></div>
          </div>
        </Anime>
        <Anime delay={2000} translateX={'10em'}>
          <div className="history_section">
            <div className="history_header">NOW</div>
            <div className="history_object"></div>
          </div>
        </Anime>
      </div> 
    );
  }
});

export default UserProfile;