import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserAlt, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(result =>{

        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
              <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to={'/'}>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
                <div className="mx-4">
                    <Image roundedCircle src={user?.photoURL} height="30px"></Image>
                    {
                        user?.uid ? <Button onClick={handleLogout} variant="">Logout</Button> : <Link to={'/login'}><Button variant="">Login</Button></Link>
                    }
                    {/* <Button onClick={handleLogout} variant="">Logout</Button>
                    <Link to={'/login'}><Button variant="">Login</Button></Link> */}
                </div>
                <div className='d-flex align-items-center'>
                    <FaUserAlt></FaUserAlt>
                    <p className='mx-2'><small>{user?.displayName}</small></p>
                </div>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;