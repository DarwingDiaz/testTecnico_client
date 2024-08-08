import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useLoginUserMutation } from '../../store/api';
import style from './Login.module.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password }).unwrap();
      
      // Guardar el token en localStorage
      localStorage.setItem('token', response.token);

      localStorage.setItem('role', response.role);
      if (response.role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (response.role === 'Manager') {
        navigate('/manager-dashboard');
      } else if (response.role === 'Employee') {
        navigate('/employee-dashboard');
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <div className={`container-sm p-3 ${style.container__auth}`}>
      <form className={`p-4 ${style.form__login}`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className={style.input__login}
          onChange={(e) => setUsername(e.target.value)} // Cambiado a setUsername
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className={style.input__login}
          onChange={(e) => setPassword(e.target.value)} // Cambiado a setPassword
        />
        <Button type="submit">Login</Button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Link className={style.link__} to="/register">
        <h6 className={style.create__}>crear cuenta</h6>
      </Link>
    </div>
  );
};
