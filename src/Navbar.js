import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/tasks">Tarefas</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
