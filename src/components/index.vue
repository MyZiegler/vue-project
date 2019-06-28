<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <a-layout-sider v-model="collapsed">
      <!-- <div class="logo">
        <img src="../assets/注册1@2x.png" alt="">蔚云后台管理
      </div> -->
      
    </a-layout-sider>
    
  </a-layout>
</template>
<script>

</script>

<style>
#components-layout-demo-side .logo {
  /* height: 32px; */
  /* background: rgba(255, 255, 255, 0.2); */
  padding: 16px;
  font-size: 18px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.titler {
  height: 64px;
  /* min-width: 1200px; */
}

.set,
.search,
.meassage,
.name {
  float: right;
  /* margin-top: 24px; */
}
.set img {
  /* margin-left: 966px; */
  width: 16px;
  margin-right: 25px;
}
.search img {
  width: 16px;
}
.meassage img {
  width: 16px;
  margin-left: 26px;
}
.person {
  float: right;
  margin-right: 22px;
}
.headImg {
  width: 24px;
  height: 24px;
  background: rgba(166, 219, 255, 1);
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 26px;
  margin-right: 8px;
  float: left;
}
.logo img {
  width: 31px;
  padding-top: 3px;
  margin-right: 17px;
}
</style>
