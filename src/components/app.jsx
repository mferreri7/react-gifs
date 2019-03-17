import React, { Component } from 'react';
import giphy from 'giphy-api';

import FormSearch from './formSearch';
import Gif from './gif';
import GifList from './gifList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
    };
  }

  search = (query) => {
    giphy({ apiKey: '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm', https: true }).search({
      q: query,
      limit: 10
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  changeSelectedGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  render() {
    const { selectedGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <FormSearch searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
