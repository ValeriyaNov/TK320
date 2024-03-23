<template>
  <div class="container">
    <div class="title"> {{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
props:['title'],
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  }
}
</script>

<style lang='scss' scoped>
$widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
$colorTable:#3A3535;
.title{
    width:560px;
    color: $colorTitle;
                font-family: Lato;
                font-size: 35px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
}
.container{
    padding-top:56px;
    margin-bottom:30px;
    display:flex;
    justify-content:center;
}
</style>