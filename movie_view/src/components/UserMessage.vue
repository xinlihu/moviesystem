<template lang="html">
  <div v-if=!isLogin class="header">
    <router-link to="/loginPage">
    <div class="header_menu">登录</div>
    </router-link>
  </div>
  <div v-else class="header">
    <router-link :to="{path:'/userInfo',query:{id:id}}">
      <div class="header_menu">已登录:{{username}}</div>
    </router-link>    
  </div>
</template>>
<!--这里需要一开始对于session进行检测，如果存在session则直接显示登录，不存在则是跳转链接-->
<script>
export default {
  data(){
    return{
      isLogin:false,
      username:'',
    }
  },
  created(){
    let token=localStorage.getItem('token')
    if(token){
      this.isLogin=true
      this.username=localStorage.getItem('username')
      this.id=localStorage.getItem('_id')
      }else{
        console.log('用户登录失败');
        //可以增加跳转信息或者返回错误信息
      }
    }
}
</script>
<style lang="css" scoped>
.header{
  width: 103%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color: #c3bbbb;
}
  .header_menu{
    padding-right: 60px;
    padding-top:10px;
    float:right;
    color:#fff;
    font-size:8px;
  }
</style>
