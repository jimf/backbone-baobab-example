'use strict';

import BaseView from './base';
import template from '../../templates/app.hbs';
import FilterableProductTable from './filterable_product_table';

export default BaseView.extend({
    template,

    initialize() {
        this.filterableProductTable = new FilterableProductTable({
            state: this.state
        });
    },

    onRender() {
        this.$el.append(this.filterableProductTable.render().el);
    }
});
