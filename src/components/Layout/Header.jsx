import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/Context';
import { useContext } from 'react';

function Header() {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const Logouthandler = () => {
        logout();
        navigate('/');
    };

    return(
        <Navbar bg="dark" data-bs-theme="dark"
                style={{ height: '100px', position: 'fixed', width: '100%', zIndex: 1000 }}>
            <Container>
                <Navbar.Brand onClick={()=>{ navigate('/') }}
                              style={{ fontSize: '3rem'}}>Rudia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    <Nav.Link onClick={() => {navigate("info")}}
                              style={{ fontSize: '1.5rem', marginLeft: '60px'}}>
                              INTRODUCTION TO ALCOHOL 
                    </Nav.Link>

                    <Nav.Link onClick={() => {navigate("Breweryinfo")}}
                              style={{ fontSize: '1.5rem', marginLeft: '30px'}}>
                              VISITING BREWERY
                    </Nav.Link>

                    <NavDropdown title="COMMUNITY" id="basic-nav-dropdown"
                                 style={{ fontSize: '1.5rem',
                                          marginLeft: '30px'
                                 }}>
                        <NavDropdown.Item onClick={() => {navigate("/board/free")}}>
                            자유 게시판
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {navigate("/board/info")}}>
                            정보 공유 게시판
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {navigate("/board/review")}}>
                            후기 게시판
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {navigate("/board/meeting")}}>
                            모임 게시판
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {user ? (
                    <Button variant="outline-light"
                            style={{ color: 'white' }}
                            onClick={Logouthandler}>
                        LOGOUT
                    </Button>
                ) : (
                    <>
                        <Button variant="outline-light"
                                style={{ color: 'white' }}
                                onClick={() => {navigate("/Login")}}>
                            LOGIN
                        </Button>
                        <Button variant="outline-light"
                                style={{ color: 'white', marginLeft: '10px' }}
                                onClick={() => {navigate("/Join")}}>
                            JOIN
                        </Button>
                    </>
                )}
            </Container>
        </Navbar>
        );
    }

export default Header;