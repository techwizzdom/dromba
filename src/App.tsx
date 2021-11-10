import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import useTheme from './useTheme';

import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import MainContainer from './components/MainContainer';

import Home from './routes/Home';
import Blog from './routes/Blog';
import Art from './routes/Art';

import { init } from './util/init';
import { ILogoDiving } from './components/HeaderDesktop';
import Me from './routes/Me';
import Post from './routes/Post';
import Links from './routes/Links';

function App() {
  const [theme, toggleTheme] = useTheme();

  const [isLogoDiving, setIsLogoDiving] = useState<ILogoDiving>({
    isMoving: false,
    isJumping: false,
  });

  init();

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <MainContainer>
          <Header toggleTheme={toggleTheme} isLogoDiving={isLogoDiving} />
          <Switch>
            <Route exact path="/" component={Me} />
            <Route path="/about" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/links" component={Links} />
            <Route path="/post/:id" component={Post} />
            <Route
              path="/art"
              render={(props) => (
                <Art {...props} setIsLogoDiving={setIsLogoDiving} />
              )}
            />
          </Switch>
        </MainContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
