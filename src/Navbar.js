import { Link } from "react-router-dom";
import { Logo, NavItem } from "./styles";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <Logo to="/" className="navbar-brand">
        Not IMDB
      </Logo>

      <div className="navbar">
        <NavItem to="/movies">Movies</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
