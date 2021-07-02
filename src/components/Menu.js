import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (
    <Container>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-center py-3 border-bottom'>
        <LinkContainer to='/'>
          <Nav.Link className='d-flex align-items-center h3  mb-2 mb-md-0 text-dark text-decoration-none'>
            Usama Test
          </Nav.Link>
        </LinkContainer>
      </header>
    </Container>
  )
}

export default Menu
