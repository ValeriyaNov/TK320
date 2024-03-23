<template>
  <div>
    <router-link to='/home' class="header__link__item__color">Home</router-link>
    <div class="header">
        <div class="header__navigation">
            <router-link v-for='link in links' :key="link.id" :to="link.url" class="header__navigation__link">
                {{ link.title }}
            </router-link>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
        links:[
          {url:'home',
          title:'Общая информация'
          }, 
          {url:'standart',
          title:'Проекты стандартов'
          }, 
          {url:'perevod',
          title:'Переводы'
          }, 
          {url:'news',
          title:'Новости'
          }, 
          {url:'contact',
          title:'Контакты'
          }
      ]
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped >
@import "@/assets/css-module/_vars.scss";
$widthSite: 1140px;
$colorTitle: #EEEED1;
$colorBack:#1f1e1e;
* {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
a {
                text-decoration: none;
                color: $colorTitle;
            }
.header{
    background-color: $colorBack;
    
    height: 100px;
    &__navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: calc(50% - $widthSite/2);
    margin-right: calc(50% - $widthSite/2);
                color: $colorTitle;
                font-family: Lato;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
        &__link{
            margin-top: 50px;
        }
    }
}

</style>