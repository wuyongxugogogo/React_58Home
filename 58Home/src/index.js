import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import "./assets/css/common/public.css";
import * as serviceWorker from './serviceWorker';

function Index() {
  return (
    <React.Fragment>
      <RouterComponent />
    </React.Fragment>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
