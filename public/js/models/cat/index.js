// CatModel - Backbone Model
'use strict';

var Backbone = require('backbone');

/**
 * @class catModel
 * @classdesc Model for cats
 * @extends Backbone.Model
 */
var CatModel = Backbone.Model.extend({
    defaults: {
        firstname: '',
        lastname: ''
    }
});

module.exports = CatModel;
