<script setup>

 import {ref} from "vue";

 const userList =  ref([]);

 const getUserList = () =>{
     userList.value = [
         {
             id: 1,
             username: '用户1',
             nickname: 'Imooc 用户 1',
             phone: '15588888881',
         },
         {
             id: 2,
             username: '用户2',
             nickname: 'Imooc 用户 2',
             phone: '15588888882',
         },
         {
             id: 3,
             username: '用户3',
             nickname: 'Imooc 用户 3',
             phone: '15588888883',
         },
         {
             id: 4,
             username: '用户4',
             nickname: 'Imooc 用户 4',
             phone: '15588888884',
         },
         {
             id: 5,
             username: '用户5',
             nickname: 'Imooc 用户 5',
             phone: '15588888885',
         },
         {
             id: 6,
             username: '用户6',
             nickname: 'Imooc 用户 6',
             phone: '15588888886',
         },
         {
             id: 7,
             username: '用户7',
             nickname: 'Imooc 用户 7',
             phone: '15588888887',
         },
         {
             id: 8,
             username: '用户8',
             nickname: 'Imooc 用户 8',
             phone: '15588888888',
         },
         {
             id: 9,
             username: '用户9',
             nickname: 'Imooc 用户 9',
             phone: '15588888888',
         }
     ]
 }

 getUserList();
</script>

<template>
    <div class="container">
        <div class="nav">
            <div class="nav-item">
                <div class="icon"></div>
                <div class="text">首页</div>
            </div>
            <div class="nav-item  active">
                <div class="icon"></div>
                <div class="text">人员</div>
            </div>
            <div class="nav-item">
                <div class="icon"></div>
                <div class="text">云盘</div>
            </div>
            <div class="nav-item">
                <div class="icon"></div>
                <div class="text">知识库</div>
            </div>
            <div class="nav-item">
                <div class="icon"></div>
                <div class="text">更多</div>
            </div>
        </div>
        <div class="container-box">
            <div class="card">
                <div class="operation">
                    <div class="op-item add">添加</div>
                    <div class="op-item import">导入</div>
                    <div class="op-item export">导出</div>
                </div>
                <div class="table-list">
                    <table>
                        <thead>
                            <tr>
                                <td>用户名</td>
                                <td>昵称</td>
                                <td>手机号</td>
                                <td width="120">操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in userList">
                            <td>{{ list.username }}</td>
                            <td>{{ list.nickname }}</td>
                            <td>{{ list.phone }}</td>
                            <td>
                                <a href="javascript:;">编辑</a>
                                <a href="javascript:;">删除</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    .nav{
        z-index: 999;
        box-shadow: 0 3px 15px 0 var(--primary);
        width: 100%;
        position: fixed;
        top: 0;
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary);
        user-select: none;
        .nav-item{
            cursor: pointer;
            color: #fff;
            height: 80%;
            padding: 0 20px;
            display: flex;
            align-items: center;
            transition: all .2s;
            margin: 0 5px;
            .icon{
                width: 25px;
                height: 25px;
                border-radius: 999px;
                background: #eeeeee;
                margin-right: 10px;
            }
            .text{
                font-size: 18px;
            }
        }
        .nav-item:hover,.nav-item.active{
            background: #fff;
            border-radius: 5px;
            .icon{
                background-color: var(--primary);
            }
            .text{
                color: var(--primary);
                font-weight: bolder;
            }
        }
    }
    .container-box{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: calc(100vh - 68px);
        margin-top: 68px;
        background: #f3f3f3;
        display: flex;
        justify-content: center;
        align-items: center;
        .card{
            width: 1400px;
            height: 800px;
            background: #fff;
            border-radius: 10px;
            padding: 40px;
            display: flex;
            flex-direction: column;
        }
    }
}

.operation{
    display: flex;
    height: 38px;
    justify-content: right;
    .op-item{
        line-height: 38px;
        padding: 0 20px;
        font-size: 16px;
        background-color: #409EFF;
        border-radius: 5px;
        margin: 0 10px;
        color: #fff;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            background-color: #65b0f9;
        }
    }
    .export{
        background-color: #E6A23C;
        &:hover{
            background-color: #fcc169;
        }
    }
}

.table-list{
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0003;
        border-radius: 10px;
        transition: all .2s ease-in-out;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    table{
        width: 100%;
        max-height: 100%;
        border-collapse: collapse;
        td{
            font-size: 18px;
        }
        tr{
            line-height: 48px;
            height: 48px;
        }
        td{
            text-align: center;
            border: 1px solid #ebeef5;
        }
        thead{
            position: sticky;
            top: 0;
            background-color: #f5f7fa;
        }
        tbody{
            td{
                a{
                    margin: 0 5px;
                    color: #5b5b5b;
                    &:hover{
                        text-decoration: underline;
                        color: var(--primary);
                    }
                }
            }
        }
    }
}
</style>