import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/signin" element={<SigninPage />} exact/>
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
