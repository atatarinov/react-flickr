import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

export default class Search extends Component {

  state = {
    photos: [],
    text: '',
    tags: ''
  }

  loadPhotos = () => {
    let tags = this.state.text;
    const apiKey = 'ca3783111609d69139840916b7a01ad2';
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=30&format=json&nojsoncallback=1`;

    axios.get(url)
      .then(res => {
        this.setState({ photos: res.data.photos.photo });
      });
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.loadPhotos();
    this.setState({ text: '' });
  }

  render() {
    const { photos } = this.state;

    return (
      <div>
        <h1>Flickr</h1>
        <Navbar handleChange={this.handleChange} text={this.state.text} handleSubmit={this.handleSubmit} />
        <br />
        {
          photos.map(pic => {
            let picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            return <img key={pic.id} alt="" src={picUrl} />;
          })
        }
      </div>
    );
  }
}
