import React from 'react';

function Login() {
  return (
    <div className="login">
      <h1>Welcome to Ezlar!</h1>
      <p>Your child's journey, one milestone at a time!</p>
      <label>Email</label>
      <input type="email" placeholder="Enter your email" />
      <label>Password</label>
      <input type="password" placeholder="Enter your password" />
      <div>
        <span>Don't have an account? <a href="/signup">Sign Up</a></span>
        <span>Forgot password?</span>
      </div>
      <button>Login</button>
    </div>
  );
}

export default Login;