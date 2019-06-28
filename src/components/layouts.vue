<template>
    <section class="container">
      <section class="menu">
          <menus></menus>
      </section>
      <section class="content-container">
          <todo></todo>
      </section>
      
    </section>
     
</template>

<script>
import menus from './menus'; // * 导入刚才我们创建的 menus组件
  export  default {
    components: { // * 注册menus组件，让其可以在template调用
      menus
    }
  };
</script>

 <script>
   import todo from './todo';
  export  default {
    components: {
      todo  //新加的
    }
  };
</script>

<style>

</style>

