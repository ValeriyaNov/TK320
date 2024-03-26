<template>
  <div class="header">
    <div class="header__title container">
            <div class="header__title__designation ">
                <h2 class="header__title__designation__text">ТК 320</h2>
            </div>
            <div class="header__title__content">
                <p class="header__title__content__text">Средства индивидуальной защиты</p>
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'UnderHeaderComponent',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/css-module/_vars.scss";
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
            }
    .header{
        background-image: url(@/assets/img/zavod2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-color: $colorTitle;
        color: $colorTitle;
        height: 70vh;
        background-color: #0008;
        background-blend-mode: darken;
        box-shadow: 0 0 8px 8px #1f1e1e inset;
        &__title{
        padding-top: 200px;
        padding-left: calc(50% - $widthSite/2 + 10px);
        padding-right: calc(50% - $widthSite/2 + 10px);
        &__designation{
            &__text{
                font-family: Lato;
                font-size: 55px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: $colorTitle;
                }
            }
        &__content{
            &__text{
                font-family: Lato;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: $colorTitle;
                }
            }
        }
}
    .container {
        display: flex;
        justify-content: space-between;
            }
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .container{
    display:grid;
    grid-template-columns: 1;
  }
  .header{
    padding-left: calc(50% - $widthSite/2 + 10px);
    padding-right: calc(50% - $widthSite/2 + 10px);
    &__content{
        display: flex;
        justify-content: center;
    }
  } 
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .container{
    display:grid;
    grid-template-columns: 1;
  }
  .header{
    height: 40vh;
    padding-left: calc(50% - $widthSite/2 + 10px);
    padding-right: calc(50% - $widthSite/2 + 10px);
    &__title{
        padding-top: 40px;
    &__designation__text{
        font-size: 35px;
    }
    &__content{
        display: flex;
    justify-content: center;
        &__text{
            font-size: 30px;
        }
    }
  }    
}  
}
</style>