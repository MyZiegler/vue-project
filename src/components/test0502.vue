<template>
<div id= "app" > 
  点击次数: {{counter}}
  <button @click="handleAdd(1)">+ 1</button>
  <button @click="handleAdd(10)">+ 10</button>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
     counter: 0
    } 
  },
  methods: {
    handleAdd: function(count){
    count = count || 1;
    this.counter += count;
  }
  }
  
}
</script>


