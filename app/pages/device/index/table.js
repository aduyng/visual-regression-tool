/*global _, _s*/
define(function(require) {
    var Super = require('views/controls/table'),
        ActionTemplate = require('hbs!./action.tpl'),
        B = require('bluebird');


    var View = Super.extend();

    View.prototype.initialize = function(options) {
        //super(options)
        Super.prototype.initialize.call(this, options);

    };


    View.prototype.getColumns = function() {
        var that = this;
        return new View.Columns([{
            id: 'id',
            name: '#',
            sortable: true,
            type: 'number'
        }, {
            id: 'name',
            name: 'Name',
            sortable: true,
            renderer: function(model, column, rowIndex, columnIndex) {
                return model.get('name');
            }
        }, {
            id: 'width',
            name: 'Width',
            sortable: true,
            renderer: function(model, column, rowIndex, columnIndex) {
                return parseInt(model.get('width'), 10);
            }
        }, {
            id: 'height',
            name: 'Height',
            sortable: true,
            renderer: function(model, column, rowIndex, columnIndex) {
                return parseInt(model.get('height'), 10);
            }
        }, {
            id: 'action',
            renderer: function(model, column, rowIndex, columnIndex) {
                return ActionTemplate({
                    id: model.id
                });
            }
        }]);
    };


    return View;


});