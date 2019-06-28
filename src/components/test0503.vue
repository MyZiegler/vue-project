<template>
<div id= "app" v-cloak > 
  <template v-if="list.length" >
    <table>
      <thead>
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
    
    <tbody>
      <tr v-for="(item, index) in list" >
       <td>{{index + 1}}</td>
       <td>{{item.name}}</td>
       <td>{{item.price}}</td>
       <td>
         <a-button @click="handleReduce(index)" :disable="item.num === 1" size="small" type="dashed">-</a-button>
         {{item.num}}
         <a-button @click="handleAdd(index)" size="small" type="dashed">+</a-button>
       </td>
       <td>
         <a-button @click="handleRemove(index)"  type="danger">移除</a-button>
       </td>
      </tr>
    </tbody>
    <div>  总价： ￥{{totalPrice}}</div>
    
    </table>
  </template>
  <div v-else>购物车为空</div>


  <template>
  <a-table 
    :columns="columns"
    :dataSource="list" 
    :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: updateSelect}">
     <span slot="num" slot-scope="text, record" >

        <a-button @click="handleReduce(record.id)" :disable="record.num === 1" size="small" type="dashed">-</a-button>
         {{record.num}}
        <a-button @click="handleAdd(record.id)" size="small" type="dashed">+</a-button>
    </span>
    <span slot="handle" slot-scope="text, record">
      <a-button @click="handleRemove(record.id)"  type="danger" onChange="handleDelete(selectedRowKeys, selectedRows)">移除</a-button>
    </span>
  </a-table>
</template>

</div>

</template>


<script>
const columns = [{
  title: '序号',
  dataIndex: 'id',
  key: 'id',
  align:'center',
  width:12
}, {
  title: '商品名称',
  dataIndex: 'name',
  key: 'name',
  align:'center',
  width:50
}, {
  title: '价格',
  dataIndex: 'price',
  key: 'price',
  width:12,
  align:'center',
}, {
  title: '数量',
  key: 'num',
  dataIndex: 'num',
  align:'center',
  scopedSlots: { customRender: 'num' },
  width:12
}, {
  title: '操作',
  key: 'handle',
  scopedSlots: { customRender: 'handle' },
  width:50
}];

export default {
  name: 'app',
  data() {
    return{
     list:[
       {
         id:1,
         name:'IPhone X',
         price: 9990.0,
         num:198
       },
       {
         id:2,
         name:'IPhone 7',
         price: 4990.0,
         num:19
       },
       {
         id:3,
         name:'MIX 2',
         price: 2990.0,
         num:10
       },
       {
         id:4,
         name:'MacBook Pro',
         price: 19990.0,
         num:1
       }
     ],
      columns,
    } 
  },
  methods: {
    handleReduce: function(index){
      alert(index)
      if(this.list[index].num === 1) return;
      this.list[index].num--;
    },
    handleAdd: function(index){
      
     this.list[index].num++;
    },
    handleRemove: function(index){
      this.list.splice(index,1);
    },
    handleDelete: function(selectedRowKeys, selectedRows){
      alert(selectedRowKeys, selectedRows);
    },
    updateSelect (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      alert(selectedRowKeys, selectedRows)
    },
  },
  computed:{
    totalPrice: function(){
      var total = 0;
      for(var i = 0;i < this.list.length; i++){
        var item = this.list[i];
        total += item.price * item.num;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
    }
  }

  
}
</script>


