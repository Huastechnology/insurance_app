import { Routes, Route } from "react-router-dom";
import { LogInPage } from './pages/LogIn';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </>
  )
}

export default App;
