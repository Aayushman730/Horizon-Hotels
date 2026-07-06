import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-container">

        <h2 className="logo">
          Horizon Hotels
        </h2>

        <ul className="nav-links">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Hotels</a>
          </li>

          <li>
            <a href="#">Wishlist</a>
          </li>

          <li>
            <button className="login-btn">
              Login
            </button>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;