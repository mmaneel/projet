import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {RegFields} from './components/login/index';
import {MainContainer} from './components/login/index'; 
import {LoginFields} from './components/login/index'

 

ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
  );
  const logActive = document.getElementById('log').classList.contains('active-state');
  








