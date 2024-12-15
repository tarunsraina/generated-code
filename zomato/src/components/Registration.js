import React from 'react';

function Registration() {
  return (
    <div className="registration">
      <h1>Let's get to know you better!</h1>
      <p>Enter your first and last name to get started</p>
      <label>First Name</label>
      <input type="text" placeholder="Enter your first name" />
      <label>Last Name</label>
      <input type="text" placeholder="Enter your last name" />
      <button>Submit</button>
    </div>
  );
}

export default Registration;