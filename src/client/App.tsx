import React, { useContext } from "react";
import { Context } from "./state/context";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./shared/components/Header";
import HomesList from "./views/HomesList";
import HomeDetails from "./shared/components/HomeDetails/HomeDetails";
import HomesFilterForm from "./shared/components/HomesFilterForm";

const App: React.FC = () => {
  const { appData } = useContext(Context);
  const { loading, error } = appData || {};

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!error ? (
            <Router>
              <Switch>
                <Route path="/homes">
                  <Header>
                    <div className="pb-2">
                      <Link to={"/"}><button className="btn btn-secondary">Back</button></Link>
                    </div>
                  </Header>
                  <HomesList />
                </Route>
                <Route path="/">
                  <Header>
                    <HomesFilterForm />
                  </Header>
                  <HomesList />
                </Route>
              </Switch>
            </Router>
          ) : (
            `An error occurred: ${error}`
          )}
        </>
      )}
    </div>
  );
};

export default App;
