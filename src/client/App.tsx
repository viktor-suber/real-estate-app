import React, { useContext } from 'react';
import { Context } from './state/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

              <Router>
              <header><Header/></header>
              <div className="mx-xxl-6 mx-xl-5 mx-md-4 mx-sm-3 mx-2">
              <main>
                <Switch>
                  <Route path="/homes">
                    <HomesList />
                  </Route>
                </Switch>
              </main>
              </div>
              </Router>
            ) : `An error occurred: ${error}`}
          </>
        )}
    </div>
  );
}

export default App;
