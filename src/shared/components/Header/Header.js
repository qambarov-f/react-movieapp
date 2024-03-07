import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const favoriteCount = useSelector(
    (state) => state.home.favorite_movies
  ).length;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")}>
            Filmalisa
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          {favoriteCount && (
            <Button variant="dark">
              Favorite{" "}
              <Badge bg="warning" text="dark">
                {favoriteCount}
              </Badge>
              {/* <span className="visually-hidden">unread messages</span/> */}
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;