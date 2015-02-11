// CatsCollection - Backbone CatsCollection
'use strict';

var Backbone = require('backbone');
var CatModel = require('./index.js');

/**
 * @class CatsCollection
 * @classdesc A Backbone Collection for CatModel
 * @extends Backbone.Collection
 */
var CatsCollection = Backbone.Collection.extend({
    model: CatModel,

    url: '/api/cats/MOCK_DATA.json'
});

module.exports = CatsCollection;
