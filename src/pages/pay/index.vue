<template>
    <div class="pay">
        <div class="main">
            <img src="" alt="">
            <p class="totle">￥133.0</p>
        </div>
        <div class="cell">
            <span class="title">支付方式</span>
            <span class="type">微信支付</span>
        </div>
        <div class="btn">
            <p>支付享积分</p>
            <button class="submit-btn-bottom">立即支付￥11.00</button>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return
        }
    }
</script>
<style lang="less" scoped>
    .pay{
        min-height: 100vh;
        background-color: #f3f3f3;
        .main{
            background-color: #fff;
            overflow: hidden;
            >img{
                display: block;
                width: 270rpx;
                height: 93rpx;
                margin: 52rpx auto 37rpx auto;
            }
            .totle{
                font-size: 44rpx;
                color: #f11010;
                text-align: center;
                margin-bottom: 44rpx;
            }
        }
        .cell{
            display: flex;
            padding: 37rpx 38rpx;
            font-size: 30rpx;
            border-top: 1px solid #f3f3f3;
            background-color: #fff;
            justify-content: space-between;
            .title{
                
            }
            .type{
                color: #60a609;
            }
        }
        .btn{
            margin-top: 130rpx;
            >p{
                font-size: 26rpx;
                line-height: 60rpx;
                text-align: center
            }
            .submit-btn-bottom{
                margin-top: 0;
            }
        }
    }
</style>
