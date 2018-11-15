<template>
<!-- 订单的商品列表 -->
    <div class="goods">
        <img src="" alt="">
        <div class="g-main">
            <p>农庄自家走地鸡 喂五谷杂粮
                土鸡蛋30枚</p>
            <div class="g-bottom">
                <p class="g-num">￥60.00<span>×1</span></p>
                <span class="g-total">￥60.00</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .goods{       
        display: flex;
        margin-top: 25rpx;
        padding: 5rpx 35rpx 27rpx 21rpx;
        img{
            width: 163rpx;
            height: 150rpx;
        }
        .g-main{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            >p{
                font-size: 26rpx;
            }
            .g-bottom{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .g-num{
                    font-size: 28rpx;
                    color: #f11010;
                    span{
                        color: #2f2f2f;
                    }
                }
                .g-total{
                    font-size: 32rpx;
                    color: #f11010;
                    
                }
            }
        }
    }
</style>
