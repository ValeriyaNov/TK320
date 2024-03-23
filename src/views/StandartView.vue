<template>
  <div class="">
    <TitleComponent :title="title"/>
    <FilterComponent/>
   <TableComponent :filterStandarts="filterStandarts"/> 
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';

// @ is an alias to /src

import {mapState} from "vuex";
export default {
  name: 'StandartView',
  components: {
    TableComponent,
    FilterComponent,
    TitleComponent
  },
  data() {
    return {
      title:'Проекты стандартов, разрабатываемые в рамках ТК 320'
    };
  },
  computed: {
    ...mapState(['filterStandarts']),
    
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

