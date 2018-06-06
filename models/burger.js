var orm = require('../config/orm.js');

//Code that calls the orm functions using specific input for the orm
var burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res)
    })
  }
}

//Export file
module.exports = burger;