import { useState } from "react";
import { Button } from "react-bootstrap";
import { useRegisterUserMutation } from "../../store/api"; // Ajusta la ruta de importación según sea necesario
import style from "./Register.module.css"; // Ajusta la ruta de importación según sea necesario

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

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
        <Button type="submit" disabled={isLoading}>Register</Button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
