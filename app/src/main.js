'use strict';

import $ from 'jquery';
import Backbone from 'backbone';

Backbone.$ = $;

import app from './app';
import stateTree from './state_tree';

$(function() {
    app.init({
        el: $('.js-app').get(0),
        state: stateTree
    });
    app.layout.render();
});
