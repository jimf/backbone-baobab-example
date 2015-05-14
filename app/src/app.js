'use strict';

import LayoutView from './views/app';

export default {
    layout: null,

    init(options) {
        this.layout = new LayoutView({
            el: options.el,
            state: options.state
        });
    }
};
