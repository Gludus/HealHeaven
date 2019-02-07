/* Npm import */

import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';

/* Local import */

import App from 'src/components/App';

/* Code */

const MainComponent = () => (
  <div>
    <App />
  </div>
);

ReactDom.render(<MainComponent />, document.getElementById('root'));
