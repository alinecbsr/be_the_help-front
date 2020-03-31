import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import image from '../../assets/image.png';
import logo from '../../assets/BeTheHelp.svg';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Login failed, please try again!');
    }
  }

  return (
    <div className="login-container">

      <section className="form">

        <img className="logo" src={logo} alt="Be the Help logo" />

        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            placeholder="Your  ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">Go in</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={18} color="#EA80FC" />
            I have no registration
          </Link>
        </form>

      </section>

      <img className="picture" src={image} alt="Hearts in hands outstretched towards clouds in the sky." />

    </div>
  );
}
