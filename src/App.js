import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CryptoPage from "./pages/CryptoPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import IndexesPage from "./pages/IndexesPage";
import MarketsPage from "./pages/MarketsPage";
import Navigation from "./components/Navigation";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import CurrenciesDetailPage from "./pages/CurrenciesDetailPage";
import IndexesDetailPage from "./pages/IndexesDetailPage";
import MarketsDetailPage from "./pages/MarketsDetailPage";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/crypto/:id" component={CryptoDetailPage} />
        <Route path="/currencies/:id" component={CurrenciesDetailPage} />
        <Route path="/indexes/:id" component={IndexesDetailPage} />
        <Route path="/markets/:id" component={MarketsDetailPage} />

        <Route path="/crypto/">
          <CryptoPage />
        </Route>

        <Route path="/currencies/">
          <CurrenciesPage />
        </Route>

        <Route path="/indexes/">
          <IndexesPage />
        </Route>

        <Route path="/markets/">
          <MarketsPage />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
