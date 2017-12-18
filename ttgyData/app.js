var express = require('express');
//导入userDao
var userDao = require('./dao/userDao');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/checkUser',function(req,res){
  userDao.checkUser([req.query.username,req.query.password],
    function(result){
        //1表示成功, -1表示失败
        console.log(2);
        res.send(result);
        // if (result) {
        //     res.send({status: 1});
        // } else {
        //     res.send({status: -1});
        //     console.log('check err....');
        // }
    })
});
app.listen(8888, function () {
    console.log('用户管理后台服务器启动成功...');
})
