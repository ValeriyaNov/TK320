<template>
    <div class="">
      <TitleComponent :title="title"/>
      <!-- <FilterComponent/> -->
     <TableComponent :filterStandarts="perevods"/> 
    </div>
  </template>
  
  <script>
  //import FilterComponent from '@/components/FilterComponent.vue';
  import TableComponent from '@/components/TableComponent.vue';
  import TitleComponent from '@/components/TitleComponent.vue'
  
  // @ is an alias to /src
  
  import {mapState} from "vuex";
  export default {
    name: 'StandartView',
    components: {
      TableComponent,
      TitleComponent
      //FilterComponent
    },
    data() {
    return {
      title:'Переводы стандартов, выполняемые в рамках ТК 320'
    };
  },
    computed: {
      ...mapState(['perevods']),
      
    }
  }
  </script>
  <style lang="scss" scoped>
  $widthSite: 1140px;
  $colorTitle: #EEEED1;
  $colorBack:#1f1e1e;
  $colorOther:#E5A281;
  *{background-color: $colorBack;}
  </style>
  
  