<template>

  <div id="s">
    <ul>
      <li v-for="(item, index) in books" >{{item.name}}</li>
       <!-- <tr v-for="(item, index) in books" > -->
    </ul>
  </div>

  <!-- <br><br>
  <div id="ins">
    <input type="text" v-model="name" placeholder="姓名">
    <h1> hello，{{name}}</h1>
  </div> -->

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
// <script>
// export default {
//   name: 'ins',
//   data () {
//     return{
//       name: ''
//     }
//   },
//   created: function(){
//     // alert(this.name);
//     console.log(this.name);
//   },
//   mounted: function(){
//         // alert(this.name);

//      console.log(this.$name);
//   }
// }
// </script>
