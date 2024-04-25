import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticationScreen from './Auth';
import TaskListScreen from './ListaDeTarefas';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/login' element={<AuthenticationScreen/>}/>
      <Route exact path='/tasks' element={<TaskListScreen />}/>

      <Route path="/" element={<AuthenticationScreen/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;