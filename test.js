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

//添加
connection.query('INSERT INTO article(gmt_create,title,content,author,\`describe\` ) VALUES(?,?,?,?,?)',[moment().format(), '测试1','344343434', 'ls','dshjdshjdshds'],function (err, result) {
  if(err){
   console.log('[INSERT ERROR] - ',err.message);
   return;
  }        

 console.log('--------------------------INSERT----------------------------');     
 console.log('INSERT ID:',result);        
 console.log('-----------------------------------------------------------------\n\n');  
});


//查询
// connection.query('select * from article',function (err, result) {
//   if(err){
//     console.log('[SELECT ERROR] - ',err.message);
//     return;
//   }

//  console.log('--------------------------SELECT----------------------------');
//  console.log(result);
//  console.log('------------------------------------------------------------\n\n');  
// });