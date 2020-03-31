import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import logo from '../../assets/BeTheHelp.svg';

export default function NewHelp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewHelp(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('help', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Error registering case, try again.');
    }
  }

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

        <form onSubmit={handleNewHelp}>
          <input
            placeholder="Case title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
}
