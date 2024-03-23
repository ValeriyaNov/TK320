<template>
  <div>
    <div class="tage">
        <div  @click="clickTagFilter" v-for='tag in tages' :key="tag.id" class="tage__item" :class="{pressed:tag.pressed}">
            <div class="tage__item__text">
                {{ tag.value }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  name: 'FilterComponent',

  data() {
    return {
      
    };
  },
  mounted() {
    this.clickTagFilter(false);
  },
  computed: {
    ...mapState(['tages']),
    
  },

  methods: {
    ...mapActions(['clickTagFilter']),
  },
};
</script>

<style lang="scss" scoped>
$widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
$colorTable:#3A3535;
.tage{
    padding-top: 35px;
    margin-bottom: 35px;
    margin-right: calc(50% - $widthSite/2);
    display: flex;
    justify-content: end;
    gap:25px;
    &__item{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        width: 90px;
        height: 50px;
        background-color: #3A3535;
        &__text{
            color: $colorTitle;
                font-family: Lato;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;  
        }
    }
}
.pressed{
    background-color: #614141;
    transition: 1s;
}
</style>