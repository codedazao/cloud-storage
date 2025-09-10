<script setup>
import Nav from "@/components/Nav.vue";
import {onMounted, ref} from "vue";

const activeHelp = ref(0)
const messageBoxEl = ref();
const checkHelpPanel = (value) => {
    activeHelp.value = value;
    setTimeout(() => {
        toMessageBottom()
    })
}
const toMessageBottom = () => {
    if(messageBoxEl.value){
        messageBoxEl.value.scrollTop = messageBoxEl.value.scrollHeight
    }
}


const docList = ref([
    {
        title: "electron 的下载electron 的下载electron 的下载",
    },
    {
        title: "electron 的下载",
    },
    {
        title: "electron 的安装",
    },
    {
        title: "electron 的入门",
    },
    {
        title: "electron 的放弃",
    },
    {
        title: "Java 的下载",
    },
    {
        title: "Java 的安装",
    },
    {
        title: "Java 的入门",
    },
    {
        title: "Java 的放弃",
    },
    {
        title: "Vue 的下载",
    },
    {
        title: "Vue 的安装",
    },
    {
        title: "Vue 的入门",
    },
    {
        title: "Vue 的放弃",
    },
])
const currentDocInfo = ref("")
const currentDocTitle = ref("")
const editorBoxEl = ref();
const saveCurrentDoc = () => {
    console.log("文档保存按钮被点击")
}
onMounted(()=>{
    editorBoxEl.value.setAttribute('contenteditable',"true")
})






const isMessageLoading = ref(false)
const questionMessage = ref("")
const aiMessageList = ref([
    {
        role: "assistant",
        content: "快来向我提问吧"
    },
    {
        role: "user",
        content: "Electron 如何安装Electron 如何安装Electron 如何安装Electron 如何安装Electron 如何安装Electron 如何安装Electron 如何安装",
    },
    {
        role: "assistant",
        content: "是这样安装的是这样安装的是这样安装的是这样安装的",
    },
])
const sendToQuestion = () => {
    console.log("点击发送按钮")
}


const translateInput = ref("慕课网（IMOOC）是IT技能学习平台。慕课网(IMOOC)课程涉及JAVA、前端、Python、大数据等60类主流技术语言，覆盖了面试就业、职业成长、自我提升等需求场景，帮助用户实现从技能提升到岗位提升的能力闭环。")
const translateResult = ref("IMOOC is an IT skills learning platform. IMOOC courses involve 60 mainstream technical languages such as JAVA, front-end, Python, and big data, covering job interviews, career growth, self-improvement, and other demand scenarios, helping users achieve a closed loop of ability from skill improvement to job improvement.")
const translate = () => {
    console.log("点击翻译按钮")
}


</script>

<template>
    <div class="container">
        <Nav :index="3"/>
        <div class="container-box">
            <div class="card">
                <div class="doc-list">
                    <div class="doc-card">
                        <div class="title">知识库列表</div>
                        <div class="operation">
                            <div class="button">添加</div>
                        </div>
                    </div>
                    <div class="doc-item" v-for="(item,index) in docList">
                        <div class="icon">
                            <svg t="1721472166278" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="5121" width="200" height="200">
                                <path d="M238.933333 0h546.133334c131.959467 0 238.933333 106.973867 238.933333 238.933333v546.133334c0 131.959467-106.973867 238.933333-238.933333 238.933333H238.933333C106.973867 1024 0 917.026133 0 785.066667V238.933333C0 106.973867 106.973867 0 238.933333 0z m125.3376 352.682667h-86.647466c-12.288 0.4608-21.930667 11.2128-21.6064 24.1152v362.120533c-0.221867 6.229333 1.928533 12.305067 5.973333 16.878933 4.061867 4.5568 9.6768 7.253333 15.633067 7.4752h86.647466c5.956267-0.221867 11.5712-2.901333 15.633067-7.4752 4.0448-4.573867 6.1952-10.6496 5.973333-16.878933V376.661333a24.046933 24.046933 0 0 0-5.9392-16.896 21.879467 21.879467 0 0 0-15.6672-7.441066v0.341333z m-21.7088 66.3552H299.349333c-6.417067 0-11.6224-5.461333-11.6224-12.168534 0-6.724267 5.205333-12.1856 11.605334-12.1856h43.229866c6.144 0.392533 10.922667 5.7344 10.922667 12.1856 0 6.4512-4.778667 11.776-10.922667 12.168534z m310.033067-71.099734l-82.1248 23.381334c-11.639467 3.959467-18.141867 16.930133-14.6432 29.218133l88.285867 349.696c2.8672 12.356267 14.677333 20.002133 26.487466 17.186133l82.1248-23.5008c11.3664-4.061867 17.698133-16.759467 14.404267-28.859733l-88.064-349.474133a23.1424 23.1424 0 0 0-9.7792-14.472534 21.213867 21.213867 0 0 0-16.6912-2.935466v-0.238934z m-4.3008 70.007467l-41.130667 11.5712a11.605333 11.605333 0 0 1-13.226666-8.6528 12.288 12.288 0 0 1 7.304533-14.609067l41.130667-12.168533a11.605333 11.605333 0 0 1 13.243733 8.7552 12.305067 12.305067 0 0 1-7.338667 14.626133v0.477867zM517.495467 256h-86.528c-5.973333 0.187733-11.6224 2.8672-15.701334 7.441067a24.1664 24.1664 0 0 0-6.0416 16.896V738.816c-0.2048 6.2464 1.962667 12.3392 6.0416 16.913067s9.728 7.253333 15.701334 7.441066h86.528c5.9392-0.221867 11.5712-2.901333 15.616-7.492266 4.061867-4.5568 6.212267-10.632533 5.9904-16.861867V280.354133a24.029867 24.029867 0 0 0-5.956267-16.896 21.879467 21.879467 0 0 0-15.650133-7.458133z m-21.6064 66.3552h-43.332267c-6.0928-0.443733-10.820267-5.768533-10.8032-12.168533 0-6.4 4.7104-11.7248 10.8032-12.1856h43.332267c6.0928 0.4608 10.820267 5.7856 10.8032 12.1856 0 6.4-4.7104 11.7248-10.8032 12.168533z"
                                      fill="var(--color)" p-id="5122">
                                </path>
                            </svg>
                        </div>
                        <div class="title">{{ item.title }}</div>
                    </div>
                </div>
                <div class="editor">
                    <div class="editor-card">
                        <input type="text" placeholder="点击此处输入标题" v-model="currentDocTitle">
                        <div class="operation">
                            <div class="button" @click="saveCurrentDoc">保存</div>
                        </div>
                    </div>
                    <div class="editor-box" ref="editorBoxEl">
                        请在此输入内容
                    </div>
                </div>
                <div class="help">
                    <div class="help-card">
                        <div class="help-card-item" :class="{active:activeHelp===0}" @click="checkHelpPanel(0)">AI助手
                        </div>
                        <div class="help-card-item" :class="{active:activeHelp===1}" @click="checkHelpPanel(1)">翻译
                        </div>
                    </div>
                    <div class="help-card-box">
                        <div class="help-card-box-item help-ai" v-if="activeHelp===0">
                            <div class="message" ref="messageBoxEl">
                                <div class="message-item" v-for="item in aiMessageList">
                                    <div class="message-item-box question" v-if="item.role === 'user'">
                                        <pre class="info">{{ item.content }}</pre>
                                        <div class="avatar">我</div>
                                    </div>
                                    <div class="message-item-box answer" v-if="item.role === 'assistant'">
                                        <div class="avatar">AI</div>
                                        <div class="info" :class="{'info-loading':item.content === ''}"
                                             v-if="item.content === ''">正在思考...
                                        </div>
                                        <pre class="info" v-else>{{ item.content }}</pre>
                                    </div>
                                </div>
                            </div>
                            <div class="post-box">
                                <textarea v-model="questionMessage" :disabled="isMessageLoading" :placeholder="isMessageLoading ? 'AI正在回答..':'在此处输入问题..'"></textarea>
                                <div class="operation">
                                    <div class="button" @click="sendToQuestion">发送</div>
                                </div>
                            </div>
                        </div>
                        <div class="help-card-box-item help-translate" v-if="activeHelp===1">
                            <div class="help-translate-box">
                                <textarea placeholder="输入内容进行翻译...." v-model="translateInput"></textarea>
                                <div class="operation">
                                    <div class="button" @click="translate">翻译</div>
                                </div>
                                <div class="result" v-if="translateResult !== ''">
                                    <div class="title">翻译结果</div>
                                    <div class="info">
                                        {{ translateResult }}
                                    </div>
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

::-webkit-scrollbar {
    width: 0;
    height: 2px;
}

::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
}

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
            width: 100%;
            height: 100%;
            padding-top: 10px;
            background: #fff;
            border-radius: 10px;
            display: flex;
            overflow: hidden;
            align-items: center;
        }
    }
}

.doc-list {
    user-select: none;
    flex-shrink: 0;
    width: 300px;
    height: 100%;
    border-right: 1px solid var(--base-border);
    overflow: auto;

    .doc-card {
        position: sticky;
        height: 52px;
        box-sizing: border-box;
        top: 0;
        background-color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--primary);

        .title {
            color: var(--regular-text);
            font-size: 16px;
        }

        .operation {
            display: flex;
            align-items: center;

            .button {
                user-select: none;
                -webkit-user-select: none;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                padding: 5px 10px;
                border-radius: 5px;
                transition: all .3s;
                background-color: var(--primary);
            }

            .button:hover {
                background-color: var(--primary06);
            }
        }
    }

    .doc-item {
        width: 100%;
        padding: 10px 10px;
        border: 1px solid var(--extra-light-border);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all .2s;

        .icon {
            border-radius: 5px;
            flex-shrink: 0;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            --color:var(--primary);
            svg{
                width: 100%;
                height: 100%;
            }
        }

        .title {
            color: var(--primary-text);
            width: 100%;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }

    .doc-item:hover {
        background-color: var(--primary);
        .icon {
            --color:var(--primary);
            background-color: #fff;
        }

        * {
            color: #fff;
        }
    }
}

.editor {
    width: calc(100vw - 900px);
    border-right: 1px solid var(--base-border);
    border-left: 1px solid var(--base-border);
    height: 100%;

    .editor-card {
        height: 52px;
        box-sizing: border-box;
        position: sticky;
        top: 0;
        background-color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--primary);

        input {
            width: 100%;
            border: none;
            color: var(--primary-text);
            padding: 6px 10px;
            font-size: 16px;
        }

        .operation {
            flex-shrink: 0;
            display: flex;
            align-items: center;

            .button {
                user-select: none;
                -webkit-user-select: none;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                padding: 5px 10px;
                border-radius: 5px;
                transition: all .3s;
                background-color: var(--primary);
            }

            .button:hover {
                background-color: var(--primary06);
            }
        }
    }

    .editor-box {
        padding: 10px;
        outline: none;
        width: 100%;
        height: calc(100% - 52px);
        overflow: auto;
    }
}

.help {
    flex-shrink: 0;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .help-card {
        user-select: none;
        flex-shrink: 0;
        width: 100%;
        height: 52px;
        border-bottom: 1px solid var(--primary);
        display: flex;

        .help-card-item {
            cursor: pointer;
            box-sizing: border-box;
            width: 100%;
            height: 52px;
            line-height: 52px;
            text-align: center;
            font-size: 16px;
        }

        .active {
            background-color: var(--primary);
            color: #fff;
        }
    }

    .help-card-box {
        width: 100%;
        height: calc(100% - 52px);

        .help-card-box-item {
            height: 100%;
            width: 100%;
        }
    }
}

.help-ai {
    display: flex;
    flex-direction: column;

    .message {
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 0 20px;

        .message-item {
            .message-item-box {
                width: 100%;
                display: flex;
                margin: 10px 0;
                align-items: start;

                .avatar {
                    user-select: none;
                    flex-shrink: 0;
                    width: 40px;
                    height: 40px;
                    border-radius: 9999px;
                    background-color: var(--primary);
                    text-align: center;
                    line-height: 40px;
                    font-size: 16px;
                    color: #fff;
                }

                .info {
                    font-family: "Microsoft YaHei UI",serif;
                    max-width: 100%;
                    overflow: auto;
                    padding: 5px 10px;
                    border-radius: 5px;
                    line-height: 28px;
                    font-size: 18px;
                    background-color: #f6f6f6;
                    word-break: break-word;
                    white-space: pre-wrap;
                }

                .info-loading {
                    background-color: #e8e8e8;
                }
            }

            .question {
                justify-content: right;

                .avatar {
                    margin-left: 10px;
                }

                .info {
                    margin-left: 40px;
                }
            }

            .answer {
                justify-content: left;

                .info {
                    margin-right: 40px;
                }

                .avatar {
                    margin-right: 10px;
                }
            }
        }
    }

    .post-box {
        width: 100%;
        height: 300px;
        border-top: 1px solid var(--primary);
        display: flex;
        flex-direction: column;

        textarea {
            width: 100%;
            height: 100%;
            border: none;
            padding: 10px 20px;
            resize: none;
            outline: none;
            font-size: 18px;
            font-family: unset;
            color: var(--primary-text);
        }

        .operation {
            padding: 0 20px;
            width: 100%;
            height: 88px;
            display: flex;
            align-items: center;
            justify-content: right;

            .button {
                user-select: none;
                -webkit-user-select: none;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                padding: 10px 45px;
                border-radius: 5px;
                transition: all .3s;
                background-color: var(--primary);
            }

            .button:hover {
                background-color: var(--primary06);
            }
        }
    }
}

.help-translate {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    .help-translate-box {
        width: 80%;

        textarea {
            width: 100%;
            height: 200px;
            margin: 0;
            resize: none;
            outline: none;
            padding: 10px 20px;
            font-size: 16px;
            color: var(--primary-text);
            line-height: 1.4;
        }

        .operation {
            padding: 0 20px;
            width: 100%;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: right;

            .button {
                user-select: none;
                -webkit-user-select: none;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                padding: 5px 10px;
                border-radius: 5px;
                transition: all .3s;
                background-color: var(--primary);
            }

            .button:hover {
                background-color: var(--primary06);
            }
        }

        .result {
            .title {
                font-weight: 800;
                color: var(--primary);
                font-size: 16px;
            }

            .info {
                padding: 10px 0;
                word-break: break-word;
                font-size: 16px;
                color: var(--regular-text);
                line-height: 1.4;
            }
        }
    }
}
</style>