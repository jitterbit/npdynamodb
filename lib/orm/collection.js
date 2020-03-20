'use strict';

var _ = require('lodash');

module.exports = Collection;

function Collection(items){
  this._items = items;
}

Collection.prototype.toArray = function(){
  return this._items.map(function(item){
    return item.attributes();
  });
};

Collection.prototype.toJSON = function(){
  return JSON.stringify(this.toArray());
};

Collection.prototype.indexAt = function(index){
  return this._items[index];
};

Collection.prototype.at = function(index){
  return this.indexAt(index);
};

Collection.prototype.pluck = function(){
  var args = [this.toArray()].concat(_.map(arguments, function(arg){ return arg; }));
  return _.map.apply(_, args);
};

_.each([
  'each',
  'map',
  'reduce',
  'reduceRight',
  'find',
  'filter',
  'reject',
  'every',
  'some',
  'invokeMap',
  'sortBy',
  'groupBy',
  'keyBy',
  'countBy',
  'shuffle',
  'sample',
  'size',
  'partition',
  'head',
  'last',
  'isEmpty'
], function(name){
  Collection.prototype[name] = function(){
    var args = [this._items].concat(_.map(arguments, function(arg){ return arg; }));
    return _[name].apply(_, args);
  };
});
