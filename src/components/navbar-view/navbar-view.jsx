import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./navbar-view.scss";

export function Navigation({ logOut,user }) {
    const onLoggedOut = () => {
        localStorage.clear();
        window.open("/", "_self");
    };

    const isAuth = () => {
        //if (typeof window == 'undefined') {
        //  return false;
        // }
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
        } else {
            return false;
        }
    };

    return (
        <Navbar
            id="main-nav"
            className="mb-5"
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
        >
            {/*<Container>*/}
            <Navbar.Brand id="appName" href="/">
                myMovieFlix-Client
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                className="justify-content-end"
                id="responsive-navbar-nav"
            >
                <Nav>
                    {isAuth() && (
                        <Nav.Link className="navbar-link" href={`/user/${user?.userName}`}>
                            MyPage
                        </Nav.Link>
                    )}

                    {isAuth() && (
                        <Button
                            className="navbar-button"
                            variant="outline-danger"
                            onClick={logOut}
                        >
                            LogOut
                        </Button>
                    )}
                    {/* {!isAuth() && (
                        <Nav.Link className="navbar-link" href={`/`}>
                            Login
                        </Nav.Link>
                    )} */}

                    {/* {!isAuth() && (
                    <Nav.Link className="navbar-link" href='/register'>
                        Sign Up
                    </Nav.Link>
                    )} */}
                </Nav>
            </Navbar.Collapse>
            {/*</Container>*/}
        </Navbar>
    );
}

export default Navigation;
