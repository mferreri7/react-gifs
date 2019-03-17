import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import FormSearch from './components/formSearch';
import Gif from './components/gif';
import GifList from './components/gifList';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "KVVNGUK06y18Ez6wo9",
    };
  }

  search = (query) => {
    giphy('75YvgQ2vJAHWe81iKLLk2ZYAEHTRdaCf').search({
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
    return (
      <div>
        <div className="left-scene">
          <FormSearch searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
