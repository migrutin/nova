import React, { useState } from 'react';
import TankerList from './TankerList';
import LoginPage from './LoginPage';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  
  return (
    <div >
      {isLoggedIn ? (
        <div>
          <TankerList /> 
          <button onClick={handleLogout}>Odjavi se</button>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;