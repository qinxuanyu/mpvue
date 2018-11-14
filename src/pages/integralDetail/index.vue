<template>
    <div class="integral-detail">
        <mp-navbar
            v-model="activeIndex"
            :columns="columns"
        >
          
            <div
            v-for="(item, index) in columns"
            v-if="activeIndex === index"
            class="weui-tab__content"
            :key="item"
            >
                {{item}}的内容
            </div>
        </mp-navbar>
        <div class="nc-line"></div>
        <integral-detail-list></integral-detail-list>
    </div>
</template>
<script>
    import MpNavbar from 'mp-weui/packages/navbar'
    import integralDetailList from '@/components/integral-detail-list'
    export default {
       data (){
           return{
                columns: ['收入', '支出'],
                activeIndex: 0,
           }
       },
       components:{ MpNavbar, integralDetailList },
       methods:{

       } 
    }
</script>
<style lang="less" scoped>
    .integral-detail{

    }
</style>
