var mysql= require('mysql');
var moment=require('moment');

var connection = mysql.createConnection({
  host: '192.168.1.206',
  port:'3306',
  user:'root',
  password:'Mysql123!',
  database:'lisong_practice'
});
 
connection.connect();

connection.query('select * from article',function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    return;
  }

 console.log('--------------------------SELECT----------------------------');
 console.log(result);
 console.log('------------------------------------------------------------\n\n');  
});