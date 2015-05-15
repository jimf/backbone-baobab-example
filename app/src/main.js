'use strict';

import $ from 'jquery';
import Backbone from 'backbone';

Backbone.$ = $;

import app from './app';
import stateTree from './state_tree';
import Products from './collections/products';
import Categories from './collections/categories';
import { updateProducts } from './actions';

$(function() {
    app.init({
        el: $('.js-app').get(0),
        state: stateTree
    });
    app.layout.render();

    const products = new Products();
    const categories = new Categories();

    $.when(products.fetch(), categories.fetch()).done(() => {
        const categoryData = categories.toJSON();

        updateProducts(
            products.toJSON().map(product => {
                return {
                    category: categoryData
                        .filter(category => category.id === product.categoryId)
                        .name,
                    price: product.price,
                    stocked: product.stocked,
                    name: product.name
                };
            })
        );
    });
});
