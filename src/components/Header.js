import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
        <Container>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-3'><i class="fa-brands fa-stack-overflow fa-beat me-3"></i>Project Fair</Link></Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
