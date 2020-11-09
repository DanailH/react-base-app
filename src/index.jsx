import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from './pages/Home/Home';
import Loader from './components/loader';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './styles/build/index.css';

// TODO: To enable lazy loading of pages import the page components like this
const PageNotFound = React.lazy(() => import('./pages/PageNotFound/PageNotFound'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
