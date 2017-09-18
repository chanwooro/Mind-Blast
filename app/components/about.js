import React from 'react';

const Home = React.createClass({
  initialChecker : function(){
    var parentStates = this.props.getStates();
    if(parentStates.anime_state ==='inactive' || parentStates.onACtive === 'hide'){
      setTimeout(function(){
        this.props.showContents();
      }.bind(this), 2500);
    }
    console.log(this.props.getStates());
  },
  render: function() {
    this.initialChecker();
    return (
      <div className="content_layout">
        <div className="left_contents">
            <div className="personal_image"></div>
        </div>
        <div className="right_contents">

        </div>
      </div>
    );
  }
});

export default Home;
