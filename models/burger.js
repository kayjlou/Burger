var orm = require('../config/orm.js');

//Code that calls the orm functions using specific input for the orm
var burger = {
  selectAll: function(cb){
    orm.selectAll(cb)
    
  },
  insertOne: function(burger_name, cb){
    orm.insertOne(burger_name, cb);
  },
  updateOne: function(id, cb){
    orm.updateOne(id, cb);
  }
};

//Export file
module.exports = burger;