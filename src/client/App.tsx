import React, { useContext } from 'react';
import { Context } from './state/context';
import HomesList from './views/HomesList';

const App: React.FC = () => {

  const { appData } = useContext(Context);
  const { loading, error } = appData || {};

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <p>Loading...</p> : (
          <p>
            {!error ? <HomesList/> : `An error occurred: ${error}`}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
