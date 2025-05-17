import React from 'react';
import Navbar from './components/Navbar';
import bg from './background.jpeg';
import Routees from './Routees';

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
      <Routees/>
    </div>
  );
}

export default App;
