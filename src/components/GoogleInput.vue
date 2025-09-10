<script setup lang="ts">
import {ref, defineProps, defineEmits, watch} from "vue";
const props = defineProps({
    modelValue:{type:String,default:''},
    label:String
})
const emits = defineEmits(['update:modelValue','keyEnter']);
const modelValue = ref(props.modelValue)

const isFocusin = ref(false)
const focusin = ()=>{
    isFocusin.value = true;
}
const focusout = ()=>{
    isFocusin.value = false;
}
watch(modelValue,(value)=>{
    emits('update:modelValue',value)
});

// 监听回车键
const enter = (e:KeyboardEvent)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        e.stopPropagation();
        emits('keyEnter')
    }
}
</script>

<template>
    <div class="input" :class="{active:(isFocusin || modelValue !== ''),focus:isFocusin}">
        <input @keydown="enter" v-model="modelValue" v-bind="$attrs" @focusin="focusin" @focusout="focusout">
        <div class="label">{{ props.label }}</div>
    </div>
</template>

<style scoped lang="scss">

.input{
    width: 100%;
    height: 54px;
    position: relative;
    margin: 20px 0;
    border: 1px solid #747775;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 10px 0;
    input{
        width: 100%;
        height: 34px;
        border: transparent;
        font-size: 16px;
        background: transparent;
        padding: 0 20px;
    }
    .label{
        position: absolute;
        font-size: 16px;
        padding: 0 8px;
        left: 10px;
        bottom: calc((54px - 17px) / 2);
        background: #fff;
        transition: transform .15s cubic-bezier(.4,0,.2,1), opacity .15s cubic-bezier(.4,0,.2,1);
    }
}
.active{
    .label{
        transform: scale(0.75) translateY(-34px);
    }
}
.focus{
    color: var(--primary);
    border: 2px solid var(--primary);
}
</style>