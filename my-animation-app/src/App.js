import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimationOne from './AnimationOne'; 
import AnimationTwo from './AnimationTwo'; 
import AnimationThree from './AnimationThree'; 

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Animation One</Link>
          </li>
          <li>
            <Link to="/animation-two">Animation Two</Link>
          </li>
          <li>
            <Link to="/animation-three">Animation Three</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AnimationOne />} />
        <Route path="/animation-two" element={<AnimationTwo />} />
        <Route path="/animation-three" element={<AnimationThree />} />
      </Routes>
    </Router>
  );
};

export default App;
