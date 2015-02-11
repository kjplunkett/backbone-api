// Marionette Application
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var CatsCollection = require('./models/cat/collection.js');
var CatsCompositeView = require('./views/cat/composite.js');

/**
 * @class Application
 * @classdesc The one ring to rule them all, and plug in all the front-end
 * @extends Marionette.Application
 */
var Application = new Marionette.Application();

Application.addRegions({
    container: '.container'
});

Application.on('start', function () {
    console.log('app started...( ͡° ͜ʖ ͡°)');
    var catsCollection = new CatsCollection();
    catsCollection.fetch(); // Send HTTP GET to /api/cats
    var catsCompositeView = new CatsCompositeView({ collection: catsCollection });
    Application.container.show(catsCompositeView);
});

//start the Application
Application.start();

module.exports = Application;
