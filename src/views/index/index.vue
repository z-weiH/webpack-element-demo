<template>
    <div>
        dlfjdlfd
        <div>
          <el-button @click="click" type="primary">哈哈哈</el-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>

div{
    border: 1px solid red;
}

</style>
<script>
export default{
    components : {
    },
    mounted : function(){
    },
    data : function(){
        return ({
        });
    },
    methods : {
        click : function(){
            alert('点击事件');
        }
    },
}
</script>