<template>
<div id= "app"> 
  <a :href="url">连接</a>
  <img :src="imgUrl">
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      url:"http://www.baidu.com",
      imgUrl:"http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg"
    } 
  }

}
console.log(app.a);
</script>


