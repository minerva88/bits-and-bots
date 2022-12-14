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
        navigate('/');
    }

    return (
        <>
        <Navbar className="" expand="lg">
            <Navbar.Brand href="/">BITS & BOTS</Navbar.Brand>
            {auth ? (
                <>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className="justify-content-end" id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <NavLink to='/browse'>
                        BROWSE
                        </NavLink>
                        <NavLink to='/cart'>
                        CART
                        </NavLink>
                        <NavLink to='/checkout'>
                        CHECKOUT
                        </NavLink>
                        <Button type="primary" onClick={logout}>
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