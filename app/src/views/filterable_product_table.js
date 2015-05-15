'use strict';

import BaseView from './base';
import template from '../../templates/filterable-product-table.hbs';
import SearchBar from './search_bar';
import ProductTable from './product_table';

function inStockOnly(product) {
    return product.stocked;
}

function anyProduct() {
    return true;
}

function nameContains(text) {
    return function(product) {
        return product.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    };
}

export default BaseView.extend({
    template,

    initialize() {
        const productsCursor = this.state.select('products');
        const productFilterCursor = this.state.select('productFilter');

        this.searchBar = new SearchBar({ state: productFilterCursor });
        this.productTable = new ProductTable();

        productsCursor.on('update', this.renderProductTable.bind(this));
        productFilterCursor.on('update', this.renderProductTable.bind(this));
    },

    onRender() {
        this.$('.search-bar-container').html(this.searchBar.render().el);
        this.renderProductTable();
    },

    renderProductTable() {
        const state = this.state.get();
        const filteredProducts = state.products
            .filter(state.productFilter.inStockOnly ? inStockOnly : anyProduct)
            .filter(nameContains(state.productFilter.filterText));

        this.productTable.update(filteredProducts);
        this.$('.product-table-container').html(this.productTable.render().el);
    }
});
