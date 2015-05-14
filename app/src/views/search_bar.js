'use strict';

import BaseView from './base';
import template from '../../templates/search-bar.hbs';
import { showOnlyProductsInStock, showAllProducts, searchProducts } from '../actions';

export default BaseView.extend({
    template,

    events: {
        'input input[type="text"]': 'onSearch',
        'change input[type="checkbox"]': 'toggleInStockOnly'
    },

    renderState() {
        const state = this.state.get();

        this.$('input[type="text"]').val(state.filterText);
        this.$('input[type="checkbox"]').prop('checked', state.inStockOnly);
    },

    onSearch(e) {
        searchProducts(e.target.value);
    },

    toggleInStockOnly(e) {
        if (e.target.checked) {
            showOnlyProductsInStock();
        } else {
            showAllProducts();
        }
    }
});
