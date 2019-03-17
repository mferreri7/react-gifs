import React, { Component } from 'react';
import Gif from './gif';


class GifList extends Component {
  renderList = () => {
    const { gifs, selectedGif } = this.props;
    return gifs.map(({ id }) => <Gif id={id} key={id} selectedGif={selectedGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        { this.renderList() }
      </div>
    );
  }
}

export default GifList;
