// CatsCompositeView - Marionette CompositeView
'use strict';

var Marionette = require('backbone.marionette');
var CatItemView = require('./index.js');
var _ = require('lodash');
var fs = require('fs');
var templateHTML = fs.readFileSync(__dirname + '/composite-template.html', 'utf8');

/**
 * @class CatsCompositeView
 * @classdesc A Marionette CompositeView for the CatItemView
 * @extends Marionette.CompositeView
 */
var CatsCompositeView = Marionette.CompositeView.extend({
    childView: CatItemView,

    childViewContainer: 'ul',

    template: _.template(templateHTML)
});

module.exports = CatsCompositeView;
