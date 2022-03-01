import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./sajatosztalyok/Home";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Proba from "./sajatosztalyok/Proba";
import Statisztika from "./sajatosztalyok/Statisztika";
import Osszes from "./sajatosztalyok/Osszes";
import Forum from "./sajatosztalyok/Forum";
import Adattorles from "./sajatosztalyok/Adattorles";
import Delete from "./sajatosztalyok/Delete";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (

      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home" >
        Lonely Knight
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/*<Nav.Link href="/home">Home</Nav.Link>*/}
          <Nav.Link href="/Statisztika">Staisztika</Nav.Link>
          <Nav.Link href="/Osszes">Staisztika2</Nav.Link>
          <Nav.Link href="/Forum">Komment</Nav.Link>
          <Nav.Link href="/Proba">Proba</Nav.Link>
          {/*ADMIN--------------------------------------------------------------------------------------*/}
          {showAdminBoard && (
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/mod">Moderator</NavDropdown.Item>
            <NavDropdown.Item href="/Delete">Delete egyszerű</NavDropdown.Item>
            <NavDropdown.Item href="/Adattorles">Adattorles</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          )}
          {/*-----------------------------------------------------------------------------------------------*/}
        </Nav>
        <Nav>
        {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>


        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/Proba" component={Proba} />
            <Route path="/Statisztika" component={Statisztika} />
            <Route path="/Osszes" component={Osszes} />
            <Route path="/Forum" component={Forum} />
            <Route path="/Adattorles" component={Adattorles} />
            <Route path="/Delete" component={Delete} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
