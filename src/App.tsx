import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import useTheme from './useTheme';

import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import MainContainer from './components/MainContainer';

import Home from './routes/Home';
import Blog from './routes/Blog';
import LandingScreen from './components/LandingScreen';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <MainContainer>
          {initialLoad ? (
            <LandingScreen onClick={() => setInitialLoad(false)} />
          ) : (
            <>
              <Header toggleTheme={toggleTheme} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
              </Switch>
            </>
          )}
        </MainContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
