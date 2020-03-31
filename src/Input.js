import React, { Component } from 'react';

class Input extends Component {
  state = {
  	query: ''
  }
	
  updateQuery = (userQuery) => {
  	this.setState({
    	query: userQuery.trim()
    })
  }
  render() {
    return (
        <div className="container">
          <input 
    		type="text"
    		placeholder="Say Something"
    	  	value={this.state.query}
			onChange={(event) => this.updateQuery(event.target.value)}
    	  />
          <p className="echo">Echo:</p>
		  { (this.state.query !== '') && (<p>{this.state.query}</p>) }
        </div>
    ) 
  }
}

export default Input