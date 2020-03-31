import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/BeTheHelp.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">

        <section>
          <img src={logo} alt="Be the Help logo" />
          <h1>Register</h1>
          <p>Register, enter the platform and help people to be the help that your ONG needs.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={18} color="#EA80FC" />
            Back to login
          </Link>
        </section>

        <form>
          <input placeholder="ONG's name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <input placeholder="Country" />
          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
}
