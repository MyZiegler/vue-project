<template>
<div>
  <div class="s">
    <ul>
       <li >111</li>
      <li v-for="book in books">{{books.name}}</li>
    </ul>
  </div>
  <br><br>
  <div id="ins">
    <input type="text" v-model="name" placeholder="姓名">
    <h1> hello，{{name}}</h1>
  </div>
</div>
</template>
<script>
export default {
  name: 's',
  data () {
    return {
      books:[
        {name : 'vue 实战'},
        {name : 'Docker 原理'}
      ]
    }
  }
}

</script>
<script>
export default {
  name: 'ins',
  data () {
    return{
      name: ''
    }
  },
  created: function(){
    alert(this.name);
    console.log(this.name);
  },
  mounted: function(){
        alert(this.name);

     console.log(this.$name);
  }
}
</script>
