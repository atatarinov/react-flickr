import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { fetchPhotos, updateSearchTerm } from '../store/photos';

import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {

  state = {
    photos: [],
    text: '',
    tags: ''
  }

  loadPhotos = () => {
    // let tags = this.state.text;
    // const apiKey = secrets.apiKey;
    // let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=30&format=json&nojsoncallback=1`;

    // axios.get(url)
    //   .then(res => {
    //     this.setState({ photos: res.data.photos.photo });
    //   });
    store.dispatch(fetchPhotos('dog'));
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

    if (this.props.photos.photos.photos) {
      const { photo } = this.props.photos.photos.photos;
      // console.log('******', this.props.photos.photos.photos);
      console.log('******', photo);
      return (
        <div>
          <h1>Flickr</h1>
          <Navbar handleChange={this.handleChange} text={this.state.text} handleSubmit={this.handleSubmit} />
          <br />
          {
            photo.map(pic => {
              let picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
              return <img key={pic.id} alt="" src={picUrl} />;
            })
          }
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Flickr</h1>
          <Navbar handleChange={this.handleChange} text={this.state.text} handleSubmit={this.handleSubmit} />
          <br />
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  tags: state.tags,
  photos: state.photos
});

const mapDispatchToProps = { updateSearchTerm, fetchPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
