//Import & require connection.js into file
var connection = require('../config/connection.js');

let tableName = "burgers";

let orm = {
  // Get all burgers from DB
  selectAll: function(callback){
    
    queryString = 'SELECT * FROM ' + tableName;
    connection.query(queryString, function(err, result) {
      callback(result);

    });
  },
  // Add new burger to db
  insertOne: function(burger_name, callback){
    // Query 
    let queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    // Set default value of false 
    let burgerDevoured = false;
    
    connection.query(queryString, [burger_name, devoured], function(err, result) {
      if(err) console.log(err);
      
      callback(result);

    });
  },
  // Update a burger
  updateOne: function(id, callback){
    
    let queryString = "UPDATE " + tableName + " SET devoured=1 WHERE id=?";

    connection.query(queryString, [id], function(err, result) {
      if(err) console.log(err);

      callback(result);

    });
  }
}


module.exports = orm;