<template>
    <div class="search-list">
        <div class="srot">
            <div class="item">
                <span>距离排序</span>
                <div class="icon">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <div class="item">
                <span>价格排序</span>
                <div class="icon">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div class="nc-line"></div>
        <manor-list></manor-list>
    </div>
</template>
<script>
    import manorList from '@/components/manorList';
    export default{
        data (){
            return {

            }
        },
        components:{manorList}
    }
</script>
<style lang="less" scoped>
    .search-list{
        .srot{
            display: flex;
            justify-content: space-around;
            padding: 36rpx 0;
            border-top: 1px solid #f4f4f4;
            .item{
                display: flex;
                font-size: 30rpx;
                color: #2f2f2f;
                align-items: center;
                .icon{
                    display: flex;
                    flex-direction: column;
                    img{
                        width: 19rpx;
                        height: 9rpx;
                    }
                }
            }
        }
    }
</style>
