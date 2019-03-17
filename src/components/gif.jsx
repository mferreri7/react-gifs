import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectedGif, id } = this.props;
    if (selectedGif) {
      selectedGif(id);
    }
  }

  render() {
    const { id } = this.props;
    const src = `https://media0.giphy.com/media/${id}/giphy.gif`;

    if(!id) {
      return null;
    }

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
