import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import useTheme from './useTheme';

import Header from './components/Header';
import { ThemeContext } from './components/ThemeContext';
import MainContainer from './components/MainContainer';

import About from './routes/About';
import Timeline from './routes/Timeline';
import Home from './routes/Home';
import Blog from './routes/Blog';

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <MainContainer>
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </MainContainer>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
