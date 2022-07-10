import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './pages/Login';
import Movie from './pages/Movie';
import Music from './pages/Music';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/music" element={<Music />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </>
  );
};

export default App;
