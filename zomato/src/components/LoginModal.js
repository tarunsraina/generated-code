import React from 'react';

function LoginModal() {
  return (
    <div className="login-modal">
      <h3>Login</h3>
      <input type="text" placeholder="Phone" />
      <button>Send One Time Password</button>
    </div>
  );
}

export default LoginModal;