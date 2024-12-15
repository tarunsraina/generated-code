import React from 'react';

function SignupScreen() {
  return (
    <div className="signup-screen">
      <h1>Let's get to know you better!</h1>
      <p>Enter your first and last name to get started</p>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <button>Submit</button>
    </div>
  );
}

export default SignupScreen;