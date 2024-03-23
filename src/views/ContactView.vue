<template>
    <div class="home">
        <TitleComponent :title="title"/>
        
        <div class="box">
            <div v-for='contact in contacts' :key='contact.id' class="box">
            <ContactComponent :contact="contact"/>
        </div>
        </div>
    <MapComponent/> 
    <MemberComponent/>  
      
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
import ContactComponent from '@/components/ContactComponent.vue';
import MapComponent from '@/components/MapComponent.vue';
import MemberComponent from '@/components/MemberComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import {mapState} from "vuex"; 
  export default {
    name: 'HomeView',
    components: {
      ContactComponent,
      TitleComponent,
      MapComponent,
      MemberComponent
    },
    data() {
    return {
      title:'Структура и состав ТК 320'
    };
  },
    computed: {
    ...mapState(['contacts']),
    
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
    margin-bottom: 30px;
}
    
</style>
  