const rds = require('ali-rds');

const db = rds({
  host: '192.168.1.206',
  port:'3306',
  user:'root',
  password:'Mysql123!',
  database:'lisong_practice'
});

async function getarticle(){
  return await db.query('select * from article');
}

getarticle().then(res=>{
   console.log(res)
}).catch(err=>{
   console.log(err)
})