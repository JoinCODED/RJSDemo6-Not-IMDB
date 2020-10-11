import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Data
import movies from "./data";

// Components
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import MyList from "./MyList";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <Switch>
        <Route path="/mylist">
          <MyList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/not-found">
          <h1>Not found</h1>
        </Route>
        <Route path="/">
          <MovieList movies={movies} />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
