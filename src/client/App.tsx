import React, { useContext } from 'react';
import './App.css';
import { Context } from './state/context';

const App = () => {

  const context = useContext(Context);
  const { appData } = context;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(appData)}
        </p>
      </header>
    </div>
  );
}

export default App;
