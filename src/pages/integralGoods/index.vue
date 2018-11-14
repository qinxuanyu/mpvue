<template>
    <div class="integral-goods">
        <div class="top">
            <div class="avatar">
                <img src="" alt="">
                <span>积分明细</span>
            </div>
            <img src="" alt="">
            <p>4230</p>
        </div>
        <div class="nc-line"></div>
        <integral-goods-list></integral-goods-list>
    </div>
</template>
<script>
    import integralGoodsList from '@/components/Integral-goods-list'
    export default {
        data (){
            return{

            }
        },
        components:{ integralGoodsList },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    .integral-goods{
        .top{
            height: 260rpx;
            position: relative;
            .avatar{
                width: 100%;
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                padding: 26rpx 28rpx;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    width: 80rpx;
                    height: 80rpx;
                    border-radius: 50%;
                    overflow: hidden;
                }
                span{
                    font-size: 26rpx;
                    color: #fff;
                }
            }
            >img{
                width: 124rpx;
                height: 80rpx;
                display: block;
                margin: 70rpx auto 0 auto;
            }
            >p{
                font-size: 48rpx;
                color: #f0d200;
                text-align: center;
            }
        }
    }
</style>
