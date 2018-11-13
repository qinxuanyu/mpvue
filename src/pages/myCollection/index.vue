<template>
    <div>
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
            {{item}}
            </div>
        </mp-navbar>
        <div class="nc-line"></div>
        <collection-list></collection-list>
    </div>
</template>
<script>
    import collectionList from '@/components/collection-list'
    import MpNavbar from 'mp-weui/packages/navbar'
    export default {
        data (){
            return{
                columns: ['产品', '庄园'],
                activeIndex: 0,
            }
        },
        components:{collectionList,MpNavbar}
    }
</script>
<style lang="less" scoped>

</style>
