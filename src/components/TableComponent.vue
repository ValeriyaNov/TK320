<template>
  <div>
<table class="table">
        <div class="table__head"><tr>
            <th class="table__head__cell"><h3 class="widthSmoll">Шифр ПНС</h3></th>
            <th class="table__head__cell "><h3 class="widthLarge">Наименование</h3></th>
            <th class="table__head__cell "><h3 class="widthSmoll">Тип редакции</h3></th>
            <th class="table__head__cell "><h3 class="widthMedium">Сроки рассмотрения</h3></th>
            <th class="table__head__cell "><h3 class="widthSmoll">ПК</h3></th>
            
    </tr>
        </div>
        
    
    <div class="table__content">
        <div v-for='standart in filterStandarts' :key="standart.id" class="table__content__item">
            <tr>
            <td class="table__content__item__text "><h3 class="widthSmoll">{{ standart.cipher }}</h3></td>
            <td class="table__content__item__text "><h3 class="widthLarge">{{ standart.name }}</h3></td>
            <td class="table__content__item__text "><h3 class="widthSmoll">{{ standart.type }}</h3></td>
            <td class="table__content__item__text "><h3 class="widthMedium">{{standart.data.first}}-{{ standart.data.end }}</h3></td>
            <td class="table__content__item__text "><h3 class="widthSmoll">{{ standart.pk }}</h3></td>
            
    </tr>
        </div>
    </div>
</table>
</div>
</template>

<script>

export default {
  name: 'TableComponent',
  props:['filterStandarts'],
};
</script>

<style lang="scss" scoped>
 @import "@/assets/css-module/_vars.scss";
table{
    width:100%;
    
}
th, td{
    border:2px solid $colorTitle
}
.widthSmoll{
width: 85px;
}
.widthMedium{
width: 150px;
}
.widthLarge{
width: 635px;
}
.table{
    min-height: 700px;
    &__head{
        &__cell{
            color: $colorTitle;
            font-family: Lato;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding-left: 5px;
            padding-right: 5px;
            background-color: #614141;
        }
    }
    &__content{    
        &__item{    
            &__text{     
            color: $colorTitle;
            font-family: Lato;
            font-size: 14px;
            font-style: normal;
            font-weight: 100;
            line-height: normal;
            padding-left: 5px;
            padding-right: 5px;
            background-color: #3A3535;
            }
        }
    }
}
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .table__content__item__text{
    font-size: 14px;
  }
  .table__head__cell{
    font-size: 16px;
  }
  .widthSmoll{
    width: 75px;
  }
  .widthMedium{
    width: 120px;
  }
  .widthLarge{
    width: 320px;
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .table__content__item__text{
    font-size: 8px;
  }
  .table__head__cell{
    font-size: 8px;
  }
  .widthSmoll{
    width: 35px;
  }
  .widthMedium{
    width: 55px;
  }
  .widthLarge{
    width: 58px;
  }
}
</style>