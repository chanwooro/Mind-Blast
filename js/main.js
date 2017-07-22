import React from 'react'
import ReactDOM from 'react-dom'

var MainModule = React.createClass({
   render: function(){
        return (
            <div>
                Hello World
            </div>
        );
   } 
    
});

ReactDOM.render(
    <div className='testment'>
        <MainModule />
    </div>,
    document.getElementById('content') 
);