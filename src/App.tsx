import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { init } from './util/init';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Me from './routes/Me';
import Post from './routes/Post';
import Blog from './routes/Blog';
import Links from './routes/Links';
import Services from './routes/Services';
import Rates from './routes/Rates';
import Offers from './routes/Offers';
import Art from './routes/Art';
import BreakIntoTech from './routes/BreakIntoTech';
import ContentWizzard from './routes/ContentWizzard';
import TheRichCreator from './routes/TheRichCreator';
import CourseOutline from './routes/CourseOutline';
import ContentCreationForDevelopers from './routes/ContentCreationForDevelopers';

init();

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="grain-overlay" />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Me} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
          <Route path="/break-into-tech" component={BreakIntoTech} />
          <Route path="/500k-content-wizzard" component={ContentWizzard} />
          <Route
            path="/content-creation-for-developers"
            component={ContentCreationForDevelopers}
          />
          <Route path="/the-rich-creator" component={TheRichCreator} />
          <Route path="/course-outline" component={CourseOutline} />
          <Route path="/links" component={Links} />
          <Route path="/post/:id" component={Post} />
          <Route path="/rates" component={Rates} />
          <Route path="/offers" component={Offers} />
          <Route path="/art" component={Art} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
