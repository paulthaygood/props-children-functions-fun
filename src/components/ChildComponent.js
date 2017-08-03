import React, { Component } from 'react';
import '../styles/App.css';

class ChildComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Component
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

export default ChildComponent;
