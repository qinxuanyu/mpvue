<template>
    <div class="share">
        <div class="top">
            <p class="title">总收益</p>
            <p class="num">1388<span>积分</span></p>
            <a href=""></a>
        </div>
        <div class="nc-line"></div>
        <integral-detail-list></integral-detail-list>
    </div>
</template>
<script>
    import integralDetailList from '@/components/integral-detail-list'
    export default {
        data (){
            return{

            }
        },
        components:{integralDetailList}
    }
</script>
<style lang="less" scoped>
    .share{
        .top{
            height: 240rpx;
            text-align: center;
            position: relative;
            .title{
                font-size: 30rpx;
                color: #2e2e2e;
            }
            .num{
                font-size: 40rpx;
                color: #e72a02;
                span{
                    font-size: 30rpx;
                }
            }
            a{
                width: 40rpx;
                height: 40rpx;
                position: absolute;
                right: 12rpx;
                top: 12rpx;
            }
        }
    }
</style>
