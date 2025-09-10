<script setup>
import Nav from "@/components/Nav.vue";

const appList = [
    {
        packageName:"com.imooc.www",
        name:"慕课网",
        icon:"慕",
        type:"remote",
        path:"https://m.imooc.com/",
        width:400,
        height:800,
        resize:false,
        ua:"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
    },
    {
        packageName:"com.baidu.www",
        name:"百度",
        icon:"度",
        type:"remote",
        path:"https://m.baidu.com/",
        width:400,
        height:800,
        resize:false,
        ua:"Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
    },
    {
        packageName:"com.xiyiao.notify",
        name:"通知器",
        icon:"通",
        type:"local",
        path:"index.html",
        width:400,
        height:800,
        resize:false,
        preload:true,
    },
]

const checkApp = (item)=>{
    console.log(item)
}
</script>

<template>
    <div class="container">
        <Nav :index="4"/>
        <div class="container-box">
            <div class="card">
                <div class="other-card often-card">
                    <div class="title">更多应用</div>
                    <div class="card-content">
                        <div class="item" @click="checkApp(item)" v-for="item in appList">
                            <div class="icon">{{ item.icon }}</div>
                            <div class="title">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
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

.other-card{
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
    user-select: none;
    .card-content{
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        .item{
            border:1px solid transparent;
            transition: all .3s;
            width: 100px;
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