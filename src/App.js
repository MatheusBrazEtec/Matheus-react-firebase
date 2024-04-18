import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui

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

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
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
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;

