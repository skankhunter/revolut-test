import React from 'react';
import Exchanger from './components/Exchange';
import Header from './components/Header';
import './styles.scss';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Exchanger />
  </div>
);

export default App;
