import React, { useContext } from 'react';
import './App.css';
import { Context } from './state/context';

const App = () => {

  const { appData } = useContext(Context);
  const { loading, homes } = appData || {};

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <p>Loading...</p> : (
          <p>
            {JSON.stringify(homes)}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
