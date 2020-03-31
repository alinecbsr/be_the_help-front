import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/BeTheHelp.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">

      <header>
        <img src={logo} alt="Be the Help logo" />
        <span>Welcome, ONG</span>
        <Link className="button" to="/help/new">Register new case</Link>
        <button type="button">
          <FiPower size={18} color="#EA80FC" />
        </button>
      </header>

      <h1>Registered cases</h1>

      <ul>
        <li>
          <strong>CASE:</strong>
          <p>Summary case title help needed</p>

          <strong>DESCRIPTION:</strong>
          <p>
            Detailed description, explaining the cause of the need,
            help you need and benefits that the aid will allow, for example.
          </p>

          <strong>VALUE:</strong>
          <p>U$ 30,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Summary case title help needed</p>

          <strong>DESCRIPTION:</strong>
          <p>
            Detailed description, explaining the cause of the need,
            help you need and benefits that the aid will allow, for example.
          </p>

          <strong>VALUE:</strong>
          <p>U$ 30,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Summary case title help needed</p>

          <strong>DESCRIPTION:</strong>
          <p>
            Detailed description, explaining the cause of the need,
            help you need and benefits that the aid will allow, for example.
          </p>

          <strong>VALUE:</strong>
          <p>U$ 30,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Summary case title help needed</p>

          <strong>DESCRIPTION:</strong>
          <p>
            Detailed description, explaining the cause of the need,
            help you need and benefits that the aid will allow, for example.
          </p>

          <strong>VALUE:</strong>
          <p>U$ 30,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Summary case title help needed</p>

          <strong>DESCRIPTION:</strong>
          <p>
            Detailed description, explaining the cause of the need,
            help you need and benefits that the aid will allow, for example.
          </p>

          <strong>VALUE:</strong>
          <p>U$ 30,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
