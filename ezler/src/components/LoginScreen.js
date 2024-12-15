import React from 'react';

function LoginScreen() {
  return (
    <div className="login-screen">
      <h1>Welcome to Ezlar!</h1>
      <p>Your child's journey, one milestone at a time!</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default LoginScreen;