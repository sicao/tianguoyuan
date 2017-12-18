//这个文件用来操作和user相关的操作数据库接口
//导入数据库的配置
var dbConfig = require('../db/dbConfig');
//导入mysql模块
var mysql = require('mysql');

//编写数据接口
function checkUser (params, callback) {
    //创建链接对象
    var connection = mysql.createConnection(dbConfig.mysql);
    //开始链接
    connection.connect();
    var sql = "select * from userlist where username = ? and password = ?";
     connection.query(sql, params, function (err, result) {
            if (err){
              console.log('[CHECK ERROR]', err.message);
              return;
            }
            console.log(1);
            console.log(result);
            callback(result);
            connection.end();
      });
}

// 导出
module.exports = {
  checkUser :checkUser
}
