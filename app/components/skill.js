import React from 'react';

const WidgetList = React.createClass({
  initialChecker : function (){
    var parentStates = this.props.getStates();
    if(parentStates.anime_state ==='inactive' || parentStates.onACtive === 'hide'){
      setTimeout(function(){
        this.props.showContents();
      }.bind(this), 2500);
    }
  },
  
  render: function() {
    this.initialChecker();
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
    );
  }
});

export default WidgetList;
