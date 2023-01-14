import { Navbar } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { 
    NavLink,
    useNavigate
} from 'react-router-dom';
import AuthContext from "../context/AuthContext";



export default function Navigation() {

    const [auth, setAuth] = useContext(AuthContext);

    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="navbar__brand" href="/">BITS & BOTS</Navbar.Brand>
            {auth ? (
                <>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className="justify-content-end" id='basic-navbar-nav'>
                    <Nav className="navbar__nav">
                        <NavLink className="navbar__item" to='/browse'>
                        BROWSE
                        </NavLink>
                        <NavLink className="navbar__item" to='/cart'>
                        CART
                        </NavLink>
                        <NavLink className="navbar__item" to='/checkout'>
                        CHECKOUT
                        </NavLink>
                        <Button className="navbar__item--logout" variant="danger" onClick={logout}>
                        LOG OUT
                        </Button>
                    </Nav>
                </Navbar.Collapse>
                </>
            ) : (
                <div></div>
            )}
        </Navbar>
        </>
    );
}