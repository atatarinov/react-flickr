import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { fetchPhotos, updateSearchTerm } from '../store';

import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {

  loadPhotos = () => {
    store.dispatch(fetchPhotos(this.props.photos.searchTerm));
  }

  handleChange = (event) => {
    store.dispatch(updateSearchTerm(event.target.value));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.loadPhotos();
    store.dispatch(updateSearchTerm(''));
  }

  render() {

    let { searchTerm } = this.props.photos;

    if (this.props.photos.photos.photo) {
      const { photo } = this.props.photos.photos;

      return (
        <div>
          <h1>Flickr</h1>
          <Navbar handleChange={this.handleChange} text={searchTerm || ''} handleSubmit={this.handleSubmit} />
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
          <Navbar handleChange={this.handleChange} text={searchTerm} handleSubmit={this.handleSubmit} />
          <br />
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  photos: state.photos
});

export default connect(mapStateToProps)(Landing);
