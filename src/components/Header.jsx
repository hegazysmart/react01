import { Navbar,Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import img from '../imgs/logo.png';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home"><img src={img} alt="LOGO"></img></Navbar.Brand>
            <Nav className="d-flex">
                <Link to="/">
                    <h4 className="text-white mr-3"> Home </h4>
                </Link>

                <Link to='/about'>
                    <h4 className="text-white mr-3">About </h4>
                </Link>

                <Link to='/shop'>
                    <h4 className="text-white"> Shopping</h4>
                </Link>
                
            </Nav>
        </Navbar>
    );
  };
  
export default Header;


  
  