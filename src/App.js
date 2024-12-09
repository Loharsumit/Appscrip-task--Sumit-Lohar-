import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeChange = (change) => {
    setLikeCount((prevCount) => prevCount + change);
  };

  return (
    <>
      <Header likeCount={likeCount}/>
      <Navbar />
      <Cards onLike={handleLikeChange}/>
      <Footer/>
    </>
  );
}

export default App;
