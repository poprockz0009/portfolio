import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Headshot } from './Components/Headshot/Headshot';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { MyWork } from './Components/MyWork/MyWork';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Headshot />
      <About />
      <Services />
      <MyWork />
      <footer>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;