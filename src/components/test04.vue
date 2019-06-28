<template>
<div id= "app"> 
 <div :style="{ 'color': color,'fontSize':fontSize + 'px'}">六六六</div>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
     color: 'red',
     fontSize: 12
    } 
  }

}
console.log(app.a);
</script>


