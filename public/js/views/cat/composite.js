// CatsCompositeView - Marionette CompositeView
'use strict';

var Marionette = require('backbone.marionette');
var CatItemView = require('./index.js');

/**
 * @class CatsCompositeView
 * @classdesc A Marionette CompositeView for the CatItemView
 * @extends Marionette.CompositeView
 */
var CatsCompositeView = Marionette.CompositeView.extend({
    childView: CatItemView,

    childViewContainer: 'ul',

    template: '#composite-template'
});

module.exports = CatsCompositeView;
