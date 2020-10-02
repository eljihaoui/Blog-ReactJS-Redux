import React from 'react';
import Navbar from './layout/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ListUsers from './components/listUsers';
import { Provider } from 'react-redux';
import UserStore from './store';
function App() {
  return (
    <Provider store={UserStore}>
      <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <ListUsers></ListUsers>
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
