<template>
  <div >
    <div class="content-first-row">
      <span>选择客户</span>
      <a-button class="reports-button">选择</a-button>
    </div>
    <div style="height:50px">
      <a-divider style="margin-bottom:15px"/>
      <span style="height:15px">目前没有选定的客户</span>
      <a-divider style="margin-top:15px"/>
    </div>
    <div style="margin-top:5px">
      <span class="content-title1">分级器</span>
      <a-input style="margin-top:6px">
        <a-icon slot="prefix" type="search">
        </a-icon>
      </a-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clientlist'
}
</script>

<style scoped>
.content-first-row{
  height: 15px;
}
  .reports-button{
  background-color: #55c2c2;
  margin-left:30px;
  color:white;
}
.content-title1{
  font-size:15px;
  font-weight: bold;
}
</style>
