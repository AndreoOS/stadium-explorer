import { Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import "./Navbar.css"
import logo from "../assets/StadiumExplorerLOGO.jpg"

type Props = {
    setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setRegisterOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const AppNavBar = ({setLoginOpen, setRegisterOpen}: Props) => {
    return (
        <Navbar expand="lg" className="appNavbar fixed-top">
            <NavbarBrand href="/">
            <img
              alt="logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            </NavbarBrand>
            <NavbarCollapse>
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => {
                        setLoginOpen(true);
                    }}>
                        Log In
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                        setRegisterOpen(true);
                    }}>
                        Register
                    </Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default AppNavBar;