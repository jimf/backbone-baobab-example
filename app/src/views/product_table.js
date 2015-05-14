'use strict';

import BaseView from './base';
import template from '../../templates/product-table.hbs';
import ProductCategoryRow from './product_category_row';
import ProductRow from './product_row';

export default BaseView.extend({
    template,
    tagName: 'table',

    onRender() {
        const container = document.createDocumentFragment();
        let lastCategory = null;

        this.collection.forEach(product => {
            if (product.category !== lastCategory) {
                const categoryRow = new ProductCategoryRow({ model: product });
                container.appendChild(categoryRow.render().el);
            }

            const productRow = new ProductRow({ model: product });
            container.appendChild(productRow.render().el);
            lastCategory = product.category;
        });

        this.$('tbody').html(container);
    },

    update(collection) {
        this.collection = collection;
        return this;
    }
});
