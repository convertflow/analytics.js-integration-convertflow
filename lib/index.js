'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

var ConvertFlow = module.exports = integration('ConvertFlow')
  .global('convertflow')
  .assumesPageview()
  .option('websiteId', '')
  .tag('<script src="https://js.convertflow.co/production/websites/{{ websiteId }}.js"></script>');

ConvertFlow.prototype.initialize = function() {
  this.load(this.ready);
};

ConvertFlow.prototype.loaded = function() {
  return typeof window.convertflow === 'object';
};