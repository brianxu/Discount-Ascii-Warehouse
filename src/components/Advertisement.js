import React, { Component } from 'react';

class Advertisement extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="thumbnail card">
          <img className="ads" src={'/ad/?r=' + this.props.id} alt={'/ad/?r=' + this.props.id} />
        </div>
      </div>
    );
  }
}

export default Advertisement;