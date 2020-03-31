import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/BeTheHelp.svg';

export default function NewHelp() {
  return (
    <div className="new-help-container">
      <div className="content">

        <section>
          <img src={logo} alt="Be the Help logo" />
          <h1>Register new case</h1>
          <p>Describe the case in detail to find someone to help you solve it.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={18} color="#EA80FC" />
            Back to home
          </Link>
        </section>

        <form>
          <input placeholder="Case title" />
          <textarea placeholder="Description" />
          <input placeholder="Value" />

          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
}
