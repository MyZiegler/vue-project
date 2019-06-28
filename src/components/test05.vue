<template>
<div id= "app" > 
 <template v-if="type === 'name'">
   <label>用户名：</label>
   <input placeholder="请输入用户名" key="name-input">
 </template>
 <template v-else>
   <label>邮箱：</label>
   <input placeholder="请输入邮箱" key="mail-input">
 </template>
    <button @click="handleToggleClick">切换输入类型</button>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
     type: 'mail'
    } 
  },
  methods:{
    handleToggleClick: function() {
     
      this.type = this.type === 'name' ? 'mail': 'name';
       alert(this.type)
    }
  },
  computed
}
</script>


