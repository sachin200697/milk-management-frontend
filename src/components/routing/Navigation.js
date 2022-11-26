import { Link } from "react-router-dom";
import "../../css/navbar.css";

function Navigation() {
  return (
    <div className="milknav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="#" className="navbar-brand">
          Milk<b>King</b>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarCollapse"
          className="collapse navbar-collapse justify-content-start"
        >
          <div className="navbar-nav">
            <Link to="#" className="nav-item nav-link">
              Home
            </Link>
            <Link to="#" className="nav-item nav-link">
              About
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                data-toggle="dropdown"
                className="nav-item nav-link dropdown-toggle"
              >
                Services
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item">
                  Web Design
                </Link>
                <Link to="#" className="dropdown-item">
                  Web Development
                </Link>
                <Link to="#" className="dropdown-item">
                  Graphic Design
                </Link>
                <Link to="#" className="dropdown-item">
                  Digital Marketing
                </Link>
              </div>
            </div>
            <Link to="#" className="nav-item nav-link active">
              Pricing
            </Link>
            <Link to="#" className="nav-item nav-link">
              Blog
            </Link>
            <Link to="#" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <form className="navbar-form form-inline">
            <div className="input-group search-box">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search here..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="material-icons">&#xE8B6;</i>
                </span>
              </div>
            </div>
          </form>
          <div className="navbar-nav ml-auto action-buttons">
            <div className="nav-item dropdown">
              <Link
                to="#"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle mr-4"
              >
                Login
              </Link>
              <div className="dropdown-menu action-form">
                <form action="/examples/actions/confirmation.php" method="post">
                  <p className="hint-text">
                    Sign in with your social media account
                  </p>
                  <div className="form-group social-btn clearfix">
                    <Link
                      to="#"
                      className="btn btn-secondary facebook-btn float-left"
                    >
                      <i className="fa fa-facebook"></i> Facebook
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-secondary twitter-btn float-right"
                    >
                      <i className="fa fa-twitter"></i> Twitter
                    </Link>
                  </div>
                  <div className="or-seperator">
                    <b>or</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Login"
                  />
                  <div className="text-center mt-2">
                    <Link to="#">Forgot Your password?</Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                data-toggle="dropdown"
                className="btn btn-primary dropdown-toggle sign-up-btn"
              >
                Sign up
              </Link>
              <div className="dropdown-menu action-form">
                <form action="/examples/actions/confirmation.php" method="post">
                  <p className="hint-text">
                    Fill in this form to create your account!
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-check-label">
                      <input type="checkbox" required="required" /> I accept the{" "}
                      <Link to="#">Terms &amp; Conditions</Link>
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Sign up"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
