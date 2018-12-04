import React from 'react';

const NameEntry = () => {
  return (
    <form className="form-inline">
      <label htmlFor="name">Your name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="form-control"
      />
    </form>
  );
};

export default NameEntry;
