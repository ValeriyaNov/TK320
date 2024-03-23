<template>
  <div>
<table class="table">
        <div class="table__head"><tr>
            <th class="table__head__cell widthSmoll"><h3>Шифр ПНС</h3></th>
            <th class="table__head__cell widthLarge"><h3>Наименование</h3></th>
            <th class="table__head__cell widthSmoll"><h3>Тип редакции</h3></th>
            <th class="table__head__cell widthMedium"><h3>Сроки рассмотрения</h3></th>
            <th class="table__head__cell widthSmoll"><h3>ПК</h3></th>
            
    </tr>
        </div>
        
    
    <div class="table__content">
        <div v-for='standart in filterStandarts' :key="standart.id" class="table__content__item">
            <tr>
            <td class="table__content__item__text widthSmoll"><h3>{{ standart.cipher }}</h3></td>
            <td class="table__content__item__text widthLarge"><h3>{{ standart.name }}</h3></td>
            <td class="table__content__item__text widthSmoll"><h3>{{ standart.type }}</h3></td>
            <td class="table__content__item__text widthMedium"><h3>{{standart.data.first}}-{{ standart.data.end }}</h3></td>
            <td class="table__content__item__text widthSmoll"><h3>{{ standart.pk }}</h3></td>
            
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
$colorTable:#3A3535;
table{
    margin-left: calc(50% - $widthSite/2);
    margin-right: calc(50% - $widthSite/2);
    width:100%;

}
th, td{
    border:2px solid $colorTitle
}
.widthSmoll{
width: 90px;
}
.widthMedium{
width: 152px;
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
</style>