import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/BeTheHelp.svg';

export default function Profile() {
  const [helps, setHelp] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      },
    }).then((response) => {
      setHelp(response.data);
    });
  }, [ongId]);

  return (
    <div className="profile-container">

      <header>
        <img src={logo} alt="Be the Help logo" />
        <span>
          Welcome,
          {' '}
          {ongName}
        </span>
        <Link className="button" to="/help/new">Register new case</Link>
        <button type="button">
          <FiPower size={18} color="#EA80FC" />
        </button>
      </header>

      <h1>Registered cases</h1>

      <ul>
        {helps.map((help) => (
          <li key={help.id}>
            <strong>CASE:</strong>
            <p>{help.title}</p>

            <strong>DESCRIPTION:</strong>
            <p>{help.description}</p>

            <strong>VALUE:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(help.value)}</p>

            <button type="button">
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
