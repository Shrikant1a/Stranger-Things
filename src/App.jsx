import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
