import React, { Component } from 'react';

class FormSearch extends Component {
  handleChange = (event) => {
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input className="form-search" type="text" onChange={this.handleChange} />
    );
  }
}

export default FormSearch;
