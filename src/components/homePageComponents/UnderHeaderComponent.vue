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
        <div class="header__enter">
            <button class="header__enter__btn">Вход</button>
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
$widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
* {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }


.header{

    background-image: url(@/assets/img/zavod2.jpg);
    background-repeat: no-repeat;
    //position: relative;
    background-size: cover;
    background-color: $colorTitle;
    color: $colorTitle;
    height: 70vh;
    background-color: #0008;
    background-blend-mode: darken;
    box-shadow: 0 0 8px 8px #1f1e1e inset;
    &__title{
        padding-top: 200px;
        margin-left: calc(50% - $widthSite/3);
        margin-right: calc(50% - $widthSite/2);
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
    &__enter{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        &__btn{
            width: 150px;
            display: flex;
            height: 60px;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
            left: 50%;
            top: 50%;
            border: 2px solid #FFFFFF;
            background: none;
            font-family: 'Lato';
            border-radius: 10px;
            font-weight: 500;
            font-style: normal;
            line-height: 17px;
            font-size: 32px;
            color: $colorTitle;
        }
        &__btn:hover{
            background-color: $colorTitle;
                color: #1f1e1e;
                transition: 1s; 
        }
    }
}
.container {
                display: flex;
                justify-content: space-between;
            }
</style>