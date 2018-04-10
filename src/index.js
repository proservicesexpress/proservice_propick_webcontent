import React from 'react';
import ReactDOM from 'react-dom'
import './ui/css/index.css'
import './ui/css/main.css'
import './ui/css/owl.carousel.css'
import './ui/css/owl.transitions.css'
import './ui/css/bootstrap.min.css'
import './ui/css/font-awesome.min.css'
import App from './ui/components/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
