import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/button';

function Header() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand ><img src="../src/assets/download.png" width={50} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Check</Nav.Link>
          </Nav>
          {/* <Button variant="primary">Enroll Now</Button> */}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;