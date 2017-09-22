import React from 'react';

const UserProfile = React.createClass({
  initialChecker : function(){
    var parentStates = this.props.getStates();
    if(parentStates.anime_state ==='inactive' || parentStates.onACtive === 'hide'){
      setTimeout(function(){
        this.props.showContents();
      }.bind(this), 2500);
    }
  },
  render: function() {
    this.initialChecker();
    return (<h1>User Profile for userId: {this.props.params.userId}</h1>);
  }
});

export default UserProfile;