const rds = require('ali-rds');
const co = require('co');
const moment=require('moment');

const db = rds({
  host: '192.168.1.206',
  port:'3306',
  user:'root',
  password:'Mysql123!',
  database:'lisong_practice'
});

function* getarticle(){
  let rows = yield db.query('INSERT INTO article(gmt_create,title,content,author,\`describe\` ) VALUES(?,?,?,?,?)',[moment().format(), '测试1','344343434', 'ls','dshjdshjdshds']);
  return rows
}

function start() {
	co(getarticle).then(rows => {
  	console.log(rows);
  }).catch(err=>{
    console.log(err)
  })
}

start()


