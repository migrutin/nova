import React, { useState } from 'react';


const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    onLogin();
  };

  return (
    
    <div className=' registation-body'>
    
    <form onSubmit={handleLogin} className='registration-form'>
      <h1 className='text-xl'>Vaš nalog</h1>
     

      <div className='mt-3'>
        <label>Email adresa *</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type='email' className='email-input' />
      </div>

      <div className='mt-3'>
        <label>Lozinka*</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' className='email-input' />
      </div>

      <button type='submit' className='sign-in-button'>
        Prijavite se
      </button>
      
    </form>
   
  </div>
  );
};

export default LoginForm;
