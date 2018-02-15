import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { fetchPhotos, updateSearchTerm } from '../store';
import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {

  loadPhotos = () => {
    store.dispatch(fetchPhotos(this.props.searchTerm.searchTerm));
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

    let { searchTerm } = this.props.searchTerm;

    if (this.props.photos.photos.photo) {
      const { photo } = this.props.photos.photos;

      return (
        <div>
          <div className="navbar">
            <Navbar handleChange={this.handleChange} text={searchTerm} handleSubmit={this.handleSubmit} />
          </div>
          <div className="container" id="card-container">
            {
              photo.map(pic => {
                let picUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                return <img className="card" key={pic.id} alt="" src={picUrl} />;
              })
            }
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="navbar">
            <Navbar handleChange={this.handleChange} text={searchTerm} handleSubmit={this.handleSubmit} />
          </div>
          <div className="container" id="main" />
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
