import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CommentApp />, document.getElementById('root'));

serviceWorker.unregister();
