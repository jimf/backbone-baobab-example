'use strict';

import stateTree from './state_tree';

export function showOnlyProductsInStock() {
    stateTree.set(['productFilter', 'inStockOnly'], true);
}

export function showAllProducts() {
    stateTree.set(['productFilter', 'inStockOnly'], false);
}

export function searchProducts(filterText) {
    stateTree.set(['productFilter', 'filterText'], filterText);
}

export function updateProducts(products) {
    stateTree.set('products', products);
}
