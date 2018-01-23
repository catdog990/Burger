const connection = require('./connection.js');


const orm = {
    // selectAll: function(table){
    //     const queryString = "SELECT * FROM ??";
    //     connection.query(queryString, [table], function(err, result){
    //     if(err) throw err;
    //     console.log(result);    
    //     });
    // }

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }


};


module.exports = orm;