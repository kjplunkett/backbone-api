// CatItemView - Marionette ItemView
'use strict';

var Marionette = require('backbone.marionette');

/**
 * @class CatItemView
 * @classdesc A Marionette ItemView for CatModel's
 * @extends Marionette.ItemView
 */
var CatItemView = Marionette.ItemView.extend({

    tagName: 'li',

    template: '#item-template'

});

module.exports = CatItemView;
