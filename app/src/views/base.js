'use strict';

import Backbone from 'backbone';

export default Backbone.View.extend({

    constructor(options) {
        if (options && options.state) {
            this.state = options.state;
        }

        Backbone.View.apply(this, arguments);
    },

    data() {
        const data = this.model || this.collection || {};
        return data.toJSON ? data.toJSON() : data;
    },

    render() {
        this.$el.html(this.template(this.data()));
        this.onRender();
        this.renderState();
        return this;
    },

    onRender() {},

    renderState() {}
});
