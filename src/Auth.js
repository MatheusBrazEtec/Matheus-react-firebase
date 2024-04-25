import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui
import './App.css'; 
import { useNavigate } from 'react-router-dom';


// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7Mev47x4w4WfcR5wMvcLdMgrwKwb1P6M",
  authDomain: "etec-e4e49.firebaseapp.com",
  databaseURL: "https://etec-e4e49-default-rtdb.firebaseio.com",
  projectId: "etec-e4e49",
  storageBucket: "etec-e4e49.appspot.com",
  messagingSenderId: "520864674547",
  appId: "1:520864674547:web:67ab4d228a6f89de753d86",
  measurementId: "G-20R8HN0FM2"
  // adicione outras configurações do Firebase aqui
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function AuthenticationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      setUser(userCredential.user);
      navigate('/tasks');
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      window.location.href = '/login'
    } catch (err) {
      console.log("Erro ao fazer Logout");
    }
  };

  return (
    <div>
      <h1>Firebase Authentication</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login com Google</button><br></br>
      <button onClick={handleLogout}>Sair</button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>Dados do Usuário:</h2>
          <p>Nome: {user.displayName || 'Não fornecido'}</p>
          <p>Email: {user.email}</p>
          <p>ID do Usuário: {user.uid}</p>
        </div>
      )}
    </div>
  );
}

export default AuthenticationScreen;
  