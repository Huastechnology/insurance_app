import { Router } from '@reach/router';
import { LogInLayout } from './components/layouts/LogIn';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Home path="/"/>
        <LogInLayout path="login"/>
      </Router>
    </>
  )
}

export default App;
