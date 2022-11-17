import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
