import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => (
  <div>
    PageOne
    <Link to="/pagetwo">Navigate to Page Two</Link>
  </div>
);

const PageTwo = () => (
  <div>
    PageTwo
    <Link to="/">
      <button type="submit">Click Me!</button>
    </Link>
  </div>
);

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
