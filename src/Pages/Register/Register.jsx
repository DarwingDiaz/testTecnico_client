import { useState } from "react";
import { Button } from "react-bootstrap";
import { useRegisterUserMutation } from "../../store/api";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import style from "./Register.module.css";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    role: "Employee",
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(registerData).unwrap();
      console.log('Registration successful:', data);

      // Redirige al usuario a la página de login después del registro
      navigate('/login');
    } catch (err) {
      console.error('Failed to register:', err);
    }
  };

  return (
    <div className={`container-sm p-3 ${style.container__auth}`}>
      <form className={`p-4 ${style.form__login}`} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registerData.username}
          className={style.input__login}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          className={style.input__login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          className={style.input__login}
          onChange={handleChange}
        />
        <select
          name="role"
          value={registerData.role}
          onChange={handleChange}
          className={style.input__login}
        >
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
        <Button type="submit" disabled={isLoading}>Register</Button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
