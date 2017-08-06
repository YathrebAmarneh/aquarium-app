import React from 'react';
import ReactDOM from 'react-dom';
// So I guess that's why there were global styles... lol
import './globalStyles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
