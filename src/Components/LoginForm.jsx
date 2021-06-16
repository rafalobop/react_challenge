import React from 'react';
import '../css/loginform.css';

const LoginForm = () => {
  return (
    <>
      <div className="form-container">
        <h2 className="app-title">Bienvenido</h2>
        <p className="app-subtitle">A la mejor aplicacion de superheroes</p>
        <form action="" className="login-form">
          <h1 className="form-title">Inici&aacute; Sesi&oacute;n</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input username" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input password"
          />
          <button className="form-btn">Iniciar Sesi&oacute;n</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
