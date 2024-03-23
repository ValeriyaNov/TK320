<template>
  <div class="item">
    <div v-for='mem in members' :key='mem.id' class="member">
    <img :src="require('@/assets/img/'+ mem.url)" alt="Logo company" class="member__item"></div>
  </div>
</template>

<script>
export default {
  name: 'MemberComponent',

  data() {
    return {
      members:[
        {url:'3M.png'}, {url:'arty.png'},{url:'techno.jpg'},{url:'honeywell.jpg'},{url:'avangard.jpg'},{url:'chaika.jpg'},{url:'ek.jpg'},{url:'moder.jpeg'},{url:'tambov.png'},{url:'opora.jpg'},{url:'asis.png'},{url:'respir.webp'},{url:'rjmmun.jpg'},{url:'inter.jpeg'},{url:'sercons.jpg'}
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
$widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
.item{
    display: grid;
    //columns: 3;
    grid-template-columns: repeat(3, 3fr);
    border:1px solid transparent;
    background-color: white;
    border-radius: 120px;
    padding: 20px;
    
}
.member{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__item{
        border:1px solid transparent;
        border-radius: 30px;
        background-color: azure;
    }
}
</style>