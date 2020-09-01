import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import useTheme from './useTheme';

import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import MainContainer from './components/MainContainer';

import Home from './routes/Home';
import Blog from './routes/Blog';
import Art from './routes/Art';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <MainContainer>
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/art" component={Art} />
          </Switch>
        </MainContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
