import React from 'react';

export default function Navbar(props) {

  const { handleChange, text, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" placeholder="Find your photos" value={text} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
