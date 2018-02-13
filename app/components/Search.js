import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  state = {
    photos: []
  }

  componentDidMount() {
    const apiKey = 'ca3783111609d69139840916b7a01ad2';
    let tag = 'bird';
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=20&format=json&nojsoncallback=1`;

    axios.get(url)
      .then(res => {
        this.setState({ photos: res.data.photos.photo });
      });
  }

  render() {

    const { photos } = this.state;

    return (
      <div>
        <h1>Flickr</h1>
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
