// CatItemView - Marionette ItemView
'use strict';

var Marionette = require('backbone.marionette');
var _ = require('lodash');
var fs = require('fs');
var templateHTML = fs.readFileSync(__dirname + '/item-template.html', 'utf8');

/**
 * @class CatItemView
 * @classdesc A Marionette ItemView for CatModel's
 * @extends Marionette.ItemView
 */
var CatItemView = Marionette.ItemView.extend({

    tagName: 'li',

    template: _.template(templateHTML)

});

module.exports = CatItemView;
