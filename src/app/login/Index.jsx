import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

export default function Index() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <button onClick={handleSignUpClick}>Sign Up</button>
        <button onClick={handleLoginClick}>Log In</button>
      </div>
      {showSignUp && <Signup />}
      {showLogin && <Login />}
    </div>
  );
}
