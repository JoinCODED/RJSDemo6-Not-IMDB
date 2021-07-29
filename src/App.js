import "./App.css";
import { Route, Switch } from "react-router";

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
        <Route path="/movies/:movieSlug">
          <MovieDetail movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <MyList />
        </Route>
      </Switch>
      {/* <MovieDetail /> */}
    </div>
  );
}

export default App;
