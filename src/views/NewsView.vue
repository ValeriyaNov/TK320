<template>
    <div class="home">
        <TitleComponent :title="title"/>
        <div class="box">
            <div v-for='newsItem in news' :key='newsItem.id' class="box">
            <NewsComponent :news="newsItem"/>
        </div>
        </div>
        
      
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
import NewsComponent from '@/components/NewsComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import {mapState} from "vuex"; 
  export default {
    name: 'HomeView',
    components: {
      NewsComponent,
      TitleComponent
    },
    data() {
    return {
      title:'Новости и объявления в рамках деятельности ТК 320'
    };
  },
    computed: {
    ...mapState(['news']),
    
  }
  }
  </script>
  <style lang="scss" scoped>
  $widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
.home{
    background-color: $colorBack;
    padding-left: calc(50% - $widthSite/2);
    padding-right: calc(50% - $widthSite/2);
    min-height: 1200px;
    padding-bottom: 97px;
}
.box{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap:15px;
}
    
</style>
  