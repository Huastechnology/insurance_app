import { Routes, Route } from "react-router-dom";
import { LogInLayout } from './components/layouts/LogIn';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInLayout />} />
      </Routes>
    </>
  )
}

export default App;
