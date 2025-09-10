<script setup>

</script>

<template>
    <div class="container">
        <div class="nav">
            <div class="nav-item active">
                <div class="icon"></div>
                <div class="text">首页</div>
            </div>
            <div class="nav-item">
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
                <div class="user-card">
                    <div class="user-avatar">西</div>
                    <div class="user-info">
                        <div class="nickname">西一凹</div>
                        <div class="tel">电话：18888888888</div>
                        <div class="email">邮箱：0000000000@qq.com</div>
                    </div>
                </div>
                <div class="other-card often-card">
                    <div class="title">常用功能</div>
                    <div class="card-content">
                        <div class="item">
                            <div class="icon">人</div>
                            <div class="title">人员</div>
                        </div>
                        <div class="item">
                            <div class="icon">盘</div>
                            <div class="title">云盘</div>
                        </div>
                        <div class="item">
                            <div class="icon">库</div>
                            <div class="title">知识库</div>
                        </div>
                        <div class="item">
                            <div class="icon">更</div>
                            <div class="title">更多</div>
                        </div>
                    </div>
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
            padding: 60px;
        }
    }
}
.user-card{
    display: flex;
    align-items: center;
    .user-avatar{
        background-color: #e96835;
        color: #fff;
        width: 100px;
        height: 100px;
        border-radius: 999px;
        text-align: center;
        line-height: 100px;
        font-size: 50px;
    }
    .user-info{
        margin-left: 20px;
        line-height: 1;
        cursor: default;
        .nickname{
            color: var(--primary);
            margin-bottom: 10px;
            font-size: 20px;
            font-weight: 600;
        }
        .tel{
            margin-bottom: 5px;
        }
        .tel,.email{
            color: var(--placeholder-text);
        }
    }
}

.other-card{
    margin: 30px 0;
    .title{
        font-size: 16px;
        color: var(--regular-text);
        font-weight: bolder;
    }
    .card-content{
        width: 100%;
    }
}

.often-card{
    .card-content{
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        .item{
            border:1px solid transparent;
            transition: all .3s;
            width: 80px;
            cursor: pointer;
            padding: 10px 5px;
            border-radius: 5px;
            .icon{
                border-radius: 5px;
                margin: 0 auto;
                width: 60px;
                height: 60px;
                background-color: var(--primary06);
                line-height: 60px;
                text-align: center;
                font-size: 26px;
                color: #fff;
                transition: .3s;
            }
            .title{
                text-align: center;
                font-size: 16px;
                margin-top: 5px;
            }
        }
        .item:hover{
            background-color: var(--primary01);
            border-color:var(--primary);
            .icon{
                background-color: var(--primary);
            }
            .title{
                color: var(--primary);
            }
        }
    }

}
</style>