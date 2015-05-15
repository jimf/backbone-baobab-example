'use strict';

import Backbone from 'backbone';
import Product from '../models/product';

export default Backbone.Collection.extend({
    model: Product,
    url: '/products'
});
