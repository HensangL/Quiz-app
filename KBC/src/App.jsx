import React from 'react';
import Navbar from './components/Navbar';
import bg from './background.jpeg';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
