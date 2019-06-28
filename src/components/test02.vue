<template>
<div id= "app"> 
  <p v-if="show">这是一个文本</p>
  <button v-on:click="handleClose">点击隐藏</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      show:true
    } 
  },
  methods: {
    handleClose: function(){
      this.close();
    },
    close: function(){
      this.show = false;
    }
  }

}
console.log(app.a);
</script>


