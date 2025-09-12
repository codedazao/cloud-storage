import express from 'express';
import cors from 'cors';
import {success, error, responseJson} from "./lib/response.js";
import {time} from "./lib/date.js";
import {md5} from "js-md5";
import {readJsonFile} from "./lib/file.js";
import {empty} from "./lib/data.js";

const app = express();
const port = 3000;

// 接收JSON格式数据
app.use(express.json());

app.use(cors({
    origin: '*',
    maxAge: 86400,
    credentials: true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
}));

app.post('/login', (request,response) => {
    const params = request.body;
    if(empty(params.username)|| empty(params.password)){
        error(response,"账号或密码不能为空",300)
        return;
    }
    const userList = readJsonFile("./data/user.json")
    let currentUser = false;
    for(let item of userList){
        if(item.username === params.username && md5(item.password) === params.password){
            currentUser = item;
            break;
        }
    }
    if(currentUser === false){
        error(response,"账号或密码不正确",300)
        return;
    }
    const currentTime = time();
    success(response, {
        username: request.username,
        token: md5(`${currentUser.id}|imooc|${currentTime}`),
        time: currentTime,
        userId: currentUser.id,
    },200)
});


const verifyLogin = (request,response) =>{
    const loginId = request.header('x-id');
    const loginTime = request.header('x-time');
    const loginToken = request.header('x-token');
    const realToken = md5(`${loginId}|imooc|${loginTime}`)
    if(loginToken !== realToken){
        error(response,"未登录",400)
        return false;
    }
    if(time() - loginTime > 86400){
        error(response,"登录状态失效",401)
        return false;
    }
    return true;
}
const verifyParams = (request,response,params=[]) =>{
    let status = true;
    let data = {
        ...request.body,
        ...request.query
    };
    for(let item of params){
        if(empty(data[item])){
            status = false;
            error(response,`${item} 参数不能为空`);
            break;
        }
    }
    return status;
}

app.get('/getUserList', (request,response) => {
    const loginStatus = verifyLogin(request,response);
    if(loginStatus === false){
        return;
    }
    const userList = readJsonFile("./data/user.json")
    success(response, userList,200)
});

app.get('/getUserDetail', (request,response) => {
    const loginStatus = verifyLogin(request,response);
    const paramsStatus = verifyParams(request,response,[
        'id'
    ]);
    if(loginStatus === false || paramsStatus === false){
        return;
    }
    const params = request.query;
    const userList = readJsonFile("./data/user.json");
    let currentUser = false;
    for(let item of userList){
        if(item.id === params.id*1){
            currentUser = item;
            break;
        }
    }
    if(currentUser === false){
        error(response,"用户不存在",300)
        return;
    }
    success(response, currentUser,200)
});

app.post('/updateUserPassword', (request,response) => {
    const loginStatus = verifyLogin(request,response);
    const paramsStatus = verifyParams(request,response,[
        'id',
        'password',
    ]);
    if(loginStatus === false || paramsStatus === false){
        return;
    }
    const params = request.body;
    const userList = readJsonFile("./data/user.json");
    let currentUser = false;
    for(let item of userList){
        if(item.id === params.id){
            currentUser = item;
            break;
        }
    }
    if(currentUser === false){
        error(response,"用户不存在",300)
        return;
    }
    success(response, `Id为${params.id}的用户，密码成功修改为:${params.password}`,200)
});

app.post('/deleteUser', (request,response) => {
    const loginStatus = verifyLogin(request,response);
    const paramsStatus = verifyParams(request,response,[
        'id',
    ]);
    if(loginStatus === false || paramsStatus === false){
        return;
    }
    const params = request.body;
    const userList = readJsonFile("./data/user.json");
    let currentUser = false;
    for(let item of userList){
        if(item.id === params.id){
            currentUser = item;
            break;
        }
    }
    if(currentUser === false){
        error(response,"用户不存在",300)
        return;
    }
    success(response, `Id为${params.id}的用户，删除成功`,200)
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});