<template>
  <div class="home">
    <UnderHeaderComponent/>
    <StructuraPkComponent/>
    <ActivityComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ActivityComponent from '@/components/homePageComponents/ActivityComponent.vue';
import StructuraPkComponent from '@/components/homePageComponents/StructuraPkComponent.vue';
import UnderHeaderComponent from '@/components/homePageComponents/UnderHeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    UnderHeaderComponent,
    StructuraPkComponent,
    ActivityComponent
  }
}
</script>
