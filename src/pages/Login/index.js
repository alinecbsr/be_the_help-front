import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import image from '../../assets/image.png';
import logo from '../../assets/BeTheHelp.svg';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img className="logo" src={logo} alt="Be the Help logo" />
        <form>
          <h1>Login</h1>
          <input placeholder="Your  ID" />
          <button className="button" type="submit">Go in</button>
          <a href="/register">
            <FiLogIn size={16} color="#EA80FC" />
            I have no registration
          </a>
        </form>
      </section>
      <img className="picture" src={image} alt="Hearts in hands outstretched towards clouds in the sky." />
    </div>
  );
}
