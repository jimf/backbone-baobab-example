'use strict';

import Backbone from 'backbone';
import Category from '../models/category';

export default Backbone.Collection.extend({
    model: Category,
    url: '/categories'
});
