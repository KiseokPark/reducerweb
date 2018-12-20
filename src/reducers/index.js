// import React from 'react';
// import reactDOM from 'react-dom';
// import App from './components/App';

import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';
import { deflate } from 'zlib';

const reducers = combineReducers ({
    counter, ui

});

export default reducers;