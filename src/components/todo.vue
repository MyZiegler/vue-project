<template>
  <div class="page lists-show"><!--最外层容器-->
    <nav><!--容器上半部分-->
      <div class="nav-group"> <!--移动端的菜单图标-->
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{title}}</span> <!-- 标题-->
        <span class="count-list">{{count}}</span><!-- 数目-->
      </h1>
      <div class="nav-group right"><!-- 右边的删除，锁定图标容器-->
        <div class="options-web"> 
          <a class=" nav-item"> <!-- 锁定图标-->
            <span class="icon-lock" v-if="locked"></span>
            <span class="icon-unlock" v-else>
            </span>
          </a>
          <a class=" nav-item"><!-- 删除图标-->
            <span class="icon-trash">
            </span>
          </a>
        </div>
      </div>
  
      <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
         <input type="text" v-model="text" placeholder='请输入'@keyup.enter="onAdd" :disabled="locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
       <div v-for="item in items"> <!-- 这里`v-for`会循环我们在 `data`函数 事先定义好的 ’items‘模拟数据，循环后拿到单个对象，在通过prop把数据传输给子组件 item -->
        <item :item="item"></item>
       </div>
      
      <!--容器下半部分-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        title: '星期一',
        count: 12,
        locked: false,
      items: [ //代办单项列表
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false }
      ],
      text: '' //新增代办单项绑定的值
    }
  },
  methods: {
    onAdd() {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
      this.text = ''; //初始化输入框的值。
    }
  }
}

</script>

<script>
    import item from './item.vue';
    export  default {
        components: {  //新加components对象
        item  //新加的
        }
    };
</script>
<style lang = "less">
</style>