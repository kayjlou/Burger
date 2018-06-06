var orm = require('../config/orm.js');

//Code that calls the orm functions using specific input for the orm
var burger = {
  show: function(callback){
    orm.selectAll(callback)
    
  },
  add: function(burger_name, callback){
    orm.insertOne(burger_name, callback);
  },
  update: function(id, callback){
    orm.updateOne(id, callback);
  }
};

//Export file
module.exports = burger;