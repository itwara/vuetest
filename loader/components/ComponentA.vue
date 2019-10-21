<template>
<div>
    {{text}}
</div>
</template>
<style>
div{
    color: #999;
}
</style>
<script type="text/JavaScript">
module.exports = {
    data:  function() {
        return { text:'这是一个子组件A'};
    }
};
</script>