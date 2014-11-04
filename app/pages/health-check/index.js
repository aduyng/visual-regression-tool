/*global _, _s*/
define(function(require) {
    var Super = require('views/page/list'),
        B = require('bluebird'),
        Filter = require('./index/filter'),
        Result = require('./index/result'),
        Collection = require('collections/health-check'),
        BoxCollection = require('collections/box');

    var Page = Super.extend({});

    Page.prototype.initialize = function(options) {
        var that = this;
        //super(options)
        Super.prototype.initialize.call(that, options);

        if (!that.collection) {
            that.collection = new Collection();
        }
        
        that.boxCollection = new BoxCollection();
        
    };
    Page.prototype.getRenderOptions = function() {
        return {
            pageName: 'Health Check'
        };
    };

    Page.prototype.preRender = function() {
        return this.boxCollection.fetch();
    };
    
    Page.prototype.getResultOptions = function() {
        return {
            boxCollection: this.boxCollection
        };
    };


    Page.prototype.getFilterOptions = function() {
        var that = this;

        return {};
    };

    Page.prototype.getFilterClass = function() {
        return Filter;
    };

    Page.prototype.getResultClass = function() {
        return Result;
    };

    return Page;


});