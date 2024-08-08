import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useLoginUserMutation } from '../../store/api'; // Importa el hook generado
import style from './Login.module.css';

export const Login = () => {
  const [username, setEmail] = useState('');
  const [password, setUsername] = useState('');
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation(); // Usa el hook generado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password }).unwrap();
      console.log('Login successful:', response);
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <div className={`container-sm p-3 ${style.container__auth}`}>
      <form className={`p-4 ${style.form__login}`} onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          className={style.input__login}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className={style.input__login}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Login</Button> {/* Cambia a type="submit" */}
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Link className={style.link__} to="/register">
        <h6 className={style.create__}>crear cuenta</h6>
      </Link>
    </div>
  );
};
