import { Navbar } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
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
        navigate.push('/');
    }

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">BITS & BOTS</Navbar.Brand>
            {auth ? (
                <>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
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