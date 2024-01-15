import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      name: form.elements.name.value,
      phone: form.elements.phone.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(userData));
    form.reset();
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      <form onSubmit={handleRegister}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Електронна пошта:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Зареєструватись</button>
      </form>
      <p>
        Уже маєте акаунт? <Link to="/login">Увійти</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
