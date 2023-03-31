import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import useTheme from './useTheme';

import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import MainContainer from './components/MainContainer';

import Blog from './routes/Blog';
import Art from './routes/Art';

import { init } from './util/init';
import { ILogoDiving } from './components/HeaderDesktop';
import Me from './routes/Me';
import Post from './routes/Post';
import Links from './routes/Links';
import Services from './routes/Services';
import Pricing from './routes/Pricing';
import BreakIntoTech from './routes/BreakIntoTech';

function App() {
  const [theme, toggleTheme] = useTheme();

  const [isLogoDiving, setIsLogoDiving] = useState<ILogoDiving>({
    isMoving: false,
    isJumping: false,
  });

  // const Snow = require('react-snow-effect');

  init();

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <MainContainer>
          {/* <Snow /> */}
          <Header toggleTheme={toggleTheme} isLogoDiving={isLogoDiving} />
          <Switch>
            <Route exact path="/" component={Me} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route
              path="/0-knowledge-to-frontend-engineering-job"
              component={BreakIntoTech}
            />
            <Route path="/links" component={Links} />
            <Route path="/post/:id" component={Post} />
            <Route path="/pricing/:id" component={Pricing} />
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
