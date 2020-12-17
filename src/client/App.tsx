import React, { useContext } from 'react';
import { Context } from './state/context';
import Header from './shared/components/Header';
import HomesList from './views/HomesList';

const App: React.FC = () => {

  const { appData } = useContext(Context);
  const { loading, error } = appData || {};

  return (
    <div className="App">
        {loading ? <p>Loading...</p> : (
          <>
            {!error ? (
              <>
              <Header/>
            <HomesList/>
            </>
            ) : `An error occurred: ${error}`}
          </>
        )}
    </div>
  );
}

export default App;
