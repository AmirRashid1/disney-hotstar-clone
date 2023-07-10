// import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductionHouse from './Components/ProductionHouse';
import Slider from './Components/Slider';
import GenreMovieList from './Components/GenreMovieList';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Slider/>
  <ProductionHouse/>
  <GenreMovieList/>
    </>
  )
}

export default App
