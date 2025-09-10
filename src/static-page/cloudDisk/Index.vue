<script setup>
import Nav from "@/components/Nav.vue";
import {ref} from "vue";

const active = ref(0);
const checkFileIndex = ref(-1);
const checkFileLeft = ref(0);
const checkFileTop = ref(0);
const contextmenuFile = (event, index) => {
    checkFileLeft.value = event.clientX;
    checkFileTop.value = event.clientY;
    checkFileIndex.value = index
}
const clearAll = () => {
    checkFileIndex.value = -1;
}
const convertSize=(size)=>{
    size = size / 1024 / 1024;
    return size.toFixed(2) + "M"
}
const convertProgress = (size,current) =>{
    return (current/size * 100).toFixed(2);
}


const dbClickFile = (index) => {
    console.log("左键双击下标为 "+index+" 的文件")
}
const deleteFile = () => {
    console.log("删除下标为 "+checkFileIndex.value+" 的文件")
}
const downloadFile = () => {
    console.log("下载下标为 "+checkFileIndex.value+" 的文件")
}

const fileList = ref([
    {
        file_id: '123',
        name: '文件名文件名文件名文件名文件名文件名文件名文件名文件名',
    },
    {
        file_id: '123',
        name: '文件名',
    },
    {
        file_id: '123',
        name: '文件名',
    },
])
const uploadFileList = ref([
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "学习视频.mp4"
    },
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "学习资料.docx"
    },
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "学习资料.zip"
    },
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "学习视频.mp3"
    },
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "学习.jpg"
    },
    {
        size: 1024 * 2048 * 5,
        uploadSize: 1024 * 2048,
        name: "同学分享的学习资料同学分享的学习资料同学分享的学习资料.zip"
    },
])
const downLoadFileList = ref([
    {
        size: 1024 * 2048 * 5,
        downloadSize: 1024 * 2048,
        name: "学习.jpg"
    },
    {
        size: 1024 * 2048 * 5,
        downloadSize: 1024 * 2048,
        name: "同学分享的.zip"
    },
])


const uploadFileEl = ref();
const checkUploadFile = () => {
    uploadFileEl.value.click();
}
const fileChange = () => {
    console.log("选择了一个文件")
}

</script>

<template>
    <div class="container" @click="clearAll">
        <Nav :index="2"/>
        <div class="container-box">
            <div class="card">
                <div class="card-nav">
                    <div class="item" @click="active=0" :class="{active:active===0}">云盘</div>
                    <div class="item" @click="active=1" :class="{active:active===1}">上传({{ uploadFileList.length }})
                    </div>
                    <div class="item" @click="active=2" :class="{active:active===2}">
                        下载({{ downLoadFileList.length }})
                    </div>
                </div>
                <div class="card-list">
                    <div class="card-list-item cloud-list" v-if="active === 0">
                        <div class="tab-bar">
                            <div class="path-info">
                                <div class="label">当前路径：</div>
                                <div class="path">/</div>
                            </div>
                            <div class="operation">
                                <input type="file" style="display: none" @change="fileChange" ref="uploadFileEl">
                                <div class="button" @click="checkUploadFile">上传</div>
                            </div>
                        </div>
                        <div class="list-box">
                            <div class="file-item" :title="item.name" :class="{'file-active':checkFileIndex === index}"
                                 v-for="(item,index) in fileList" @dblclick="dbClickFile(index)"
                                 @contextmenu="contextmenuFile($event,index)">
                                <div class="icon">
                                    <svg t="1720983987241" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="1599" width="200" height="200">
                                        <path d="M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z"
                                              fill="#CCCCCC" p-id="1600"></path>
                                        <path d="M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z" fill="#EAEAEA"
                                              p-id="1601"></path>
                                        <path d="M384 499.2c0-25.6 5.12-46.08 10.24-58.88 5.12-12.8 15.36-25.6 28.16-35.84 12.8-12.8 25.6-20.48 43.52-25.6 15.36-5.12 30.72-7.68 48.64-7.68 35.84 0 64 10.24 89.6 30.72C627.2 422.4 640 448 640 481.28c0 15.36-5.12 28.16-10.24 40.96s-17.92 28.16-38.4 46.08-28.16 30.72-35.84 38.4c-7.68 7.68-10.24 17.92-15.36 28.16-5.12 10.24-2.56 17.92-2.56 43.52h-51.2c0-25.6 2.56-38.4 5.12-51.2s7.68-23.04 15.36-33.28 15.36-23.04 33.28-40.96c17.92-17.92 30.72-30.72 35.84-38.4 5.12-7.68 10.24-20.48 10.24-38.4s-7.68-30.72-20.48-43.52-30.72-20.48-53.76-20.48c-51.2 0-76.8 35.84-76.8 87.04h-51.2z m153.6 281.6h-51.2v-51.2h51.2v51.2z"
                                              fill="#FFFFFF" p-id="1602"></path>
                                    </svg>
                                </div>
                                <div class="title">{{ item.name }}</div>
                            </div>
                            <div class="right-menu" :style="`left: ${checkFileLeft}px;top: ${checkFileTop}px;`"
                                 v-if="checkFileIndex !== -1">
                                <div class="right-menu-item" @click="downloadFile">
                                    <div class="menu-icon"></div>
                                    <div class="menu-text">下载</div>
                                </div>
                                <div class="right-menu-item" @click="deleteFile">
                                    <div class="menu-icon"></div>
                                    <div class="menu-text">删除</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-list-item upload-list" v-if="active === 1">
                        <div class="upload-item" v-for="item in uploadFileList">
                            <div class="left">
                                <div class="icon"></div>
                                <div class="file-info">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="size">
                                        <div class="current-size">{{ convertSize(item.uploadSize) }}</div>
                                        /
                                        <div class="all-size">{{ convertSize(item.size) }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="center">
                                <div class="progress-info">
                                    <div class="progress">
                                        <div class="current" :style="`width:${convertProgress(item.size,item.uploadSize)}%;`"></div>
                                    </div>
                                    <div class="progress-text">{{ convertProgress(item.size,item.uploadSize) }}%</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="operation">
                                    <div class="button">取消</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-list-item download-list" v-if="active === 2">
                        <div class="download-item" v-for="item in downLoadFileList">
                            <div class="left">
                                <div class="icon"></div>
                                <div class="file-info">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="size">
                                        <div class="current-size">{{ item.downloadSize }}</div>
                                        /
                                        <div class="all-size">{{ item.size }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="center">
                                <div class="progress-info">
                                    <div class="progress">
                                        <div class="current" :style="`width:${convertProgress(item.size,item.downloadSize)}%;`"></div>
                                    </div>
                                    <div class="progress-text">{{ convertProgress(item.size,item.downloadSize) }}%</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="operation">
                                    <div class="button">取消</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    .container-box {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: calc(100vh - 68px);
        margin-top: 68px;
        background: #f3f3f3;
        display: flex;
        justify-content: center;
        align-items: center;

        .card {
            width: 1400px;
            height: 800px;
            background: #fff;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
}

.card-nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid var(--base-border);

    .item {
        width: 100%;
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        box-sizing: border-box;
        cursor: pointer;
        transition: all .3s;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .active, .item:hover {
        color: #fff;
        background-color: var(--primary);
    }
}

.card-list {
    padding: 10px 0;
    height: calc(100% - 48px);
    width: 100%;

    .card-list-item {
        width: 100%;
        height: 100%;
        overflow-x: auto;

        &::-webkit-scrollbar {
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
    }

    .cloud-list {
        user-select: none;
        -webkit-user-select: none;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .tab-bar {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            align-items: center;

            .path-info {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;

                .label {
                    flex-shrink: 0;
                }

                .path {
                    width: 100%;
                    background-color: #f1f1f1;
                    padding: 0 10px;
                }
            }

            .operation {
                flex-shrink: 0;
                display: flex;
                align-items: center;

                .button {
                    margin: 0 20px;
                    padding: 5px 16px;
                    background-color: var(--primary);
                    color: #fff;
                    border-radius: 5px;
                    transition: all .3s;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--primary06);
                    }
                }
            }
        }

        .list-box {
            &::-webkit-scrollbar {
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

            height: 100%;
            overflow-x: auto;
            display: grid;
            grid-template-columns: repeat(10, 2fr);
            align-content: flex-start;
            gap: 15px 0;

            .file-item {
                border-radius: 5px;
                margin: 0 auto;
                width: 120px;
                height: 140px;
                cursor: pointer;
                padding: 5px;
                box-sizing: border-box;
                border: 1px solid transparent;

                .icon {
                    margin: 0 auto;
                    width: 100px;
                    height: 100px;
                }

                .title {
                    text-align: center;
                    margin-top: 8px;
                    font-size: 14px;
                    color: var(--primary-text);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                }
            }

            .file-active, .file-item:hover {
                background-color: #fff;
                border: 1px solid var(--base-border);
            }

            .right-menu {
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                z-index: 999;
                border: 1px solid var(--base-border);
                width: 160px;
                position: fixed;
                left: 0;
                top: 0;
                padding: 10px;
                background-color: #fff;

                .right-menu-item {
                    cursor: pointer;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    border-radius: 5px;

                    .menu-icon {
                        width: 20px;
                        height: 20px;
                        border-radius: 999px;
                        background-color: var(--primary);
                    }

                    .menu-text {
                        margin-left: 5px;
                        font-size: 18px;
                    }
                }

                .right-menu-item:hover {
                    background-color: var(--primary);

                    .menu-icon {
                        background-color: #fff;
                    }

                    .menu-text {
                        color: #fff;
                    }
                }
            }
        }


    }

    .upload-list, .download-list {
        padding: 0 10px;
        user-select: none;
        -webkit-user-select: none;

        .upload-item, .download-item {
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: space-between;
            padding: 10px 20px;
            border-bottom: 1px solid var(--lighter-border);

            .left {
                width: 400px;
                display: flex;

                .icon {
                    flex-shrink: 0;
                    border-radius: 5px;
                    margin: 0 10px 0 0;
                    width: 30px;
                    height: 30px;
                    background-color: var(--primary);
                }

                .file-info {
                    .name {
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        font-size: 16px;
                        color: var(--primary-text);
                    }

                    .size {
                        display: flex;
                        font-size: 12px;
                        color: var(--placeholder-text);
                    }
                }
            }

            .center {
                .progress-info {
                    .progress {
                        width: 200px;
                        height: 5px;
                        background-color: #d4d4d4;
                        border-radius: 9999px;

                        .current {
                            width: 10%;
                            height: 100%;
                            background-color: var(--primary);
                            border-radius: 9999px;
                        }
                    }

                    .progress-text {
                        color: var(--placeholder-text);
                        margin-top: 5px;
                        line-height: 1;
                        font-size: 14px;
                    }
                }
            }

            .right {
                display: flex;

                .operation {
                    display: flex;

                    .button {
                        margin: 0 5px;
                        cursor: pointer;
                        font-size: 16px;
                        color: var(--regular-text);

                        &:hover {
                            color: var(--primary);
                        }
                    }

                }
            }
        }
    }
}

</style>