import React from 'react';
import './css/app.css';

const App = () => {
  return (
    <>
      <div className="background">
        <form action="" className="login-form">
          <h1>Inici&aacute; Sesi&oacute;n</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input username" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input password"
          />
        </form>
        <button className="form-btn">Iniciar Sesi&oacute;n</button>
      </div>
    </>
  );
};

export default App;
