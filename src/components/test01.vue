<template>
<div id= "app"> 
  <span v-html="link"></span>
  {{number / 20}},
  {{isOk ? '确定' : '错误'}},
  {{date | formatDate}}
  <div id="test" v-if="show"> 文本内容
  </div>
</div>
</template>

<script>
import { throws } from 'assert';
import { setInterval } from 'timers';
import { rename } from 'fs';
var padDate = function(value){
  return value < 10 ? '0' + value : value;
};
export default {
  name: 'app',
  data() {
    return{
     link: '<a href="#">html.</a>',
     isOk: true,
     number: 200,
     date: new Date()
    }
  },
  filters: {
    formatDate: function (value){
      var date = new Date(value);
      var year = date.getFullYear();
      var month = padDate(date.getMonth() + 1);
      var day = padDate(date.getDay());
      var hours = padDate(date.getHours());
      var minutes = padDate(date.getMinutes());
      var seconds = padDate(date.getSeconds());
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  },
  mounted: function() {
    var _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date();
    }, 1000);
  },
  beforeDestroy: function(){
    if (this.timer){
      clearInterval(this.timer);
    }
  }
}
console.log(app.a);
</script>


