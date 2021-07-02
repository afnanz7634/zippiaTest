import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './Layout/Layout'

// pages
import Home from './pages/Home'

const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/test/jobs' component={Home} exact />
        </Switch>
      </Container>
    </Layout>
  )
}

export default App

