import React from 'react';

export default function Navbar(props) {

  const { handleChange, text, handleSubmit } = props;
  return (
    <div className="container-fluid">
    <h1 id="main-title">flickr</h1>
    <form className="form-group" onSubmit={handleSubmit}>
      <label className="form-container">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Find your photos"
          value={text}
          onChange={handleChange}
        />
      </label>
      <button type="button" className="btn btn-light" id="submit">Submit</button>
    </form>
    </div>
  );
}
