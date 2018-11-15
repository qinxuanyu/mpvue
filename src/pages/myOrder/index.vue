<template>
    <div class="my-order">
        <ul>
            <li class="item">
                <div class="name">
                    <div>
                        开心农场
                    </div>
                    <span>待付款</span>
                </div>
                <div class="goods">
                    <p class="time">11-11 10:20</p>
                    <div class="img-box">
                        <img src="" alt="" mode="aspectFill">
                        <img src="" alt="" mode="aspectFill">
                    </div>
                    <p class="totle">
                        <span>共3件商品 &nbsp;&nbsp;总价</span>
                        <span class="num">￥255.00</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .my-order{
        ul{
            .item{
                padding-left: 30rpx;
                .name{
                    padding: 26rpx 30rpx 36rpx 0;
                    font-size: 26rpx;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #dbdbdb;
                    span{
                        color: #e61b1b;
                    }
                }
                .goods{
                    padding-right: 28rpx;
                    padding-bottom: 23rpx;
                    .time{
                        font-size: 26rpx;
                        line-height: 73rpx;
                    }
                    .img-box{
                        display: flex;

                        img{
                            width: 140rpx;
                            height: 127rpx;
                            margin: 10rpx;
                        }
                    }
                    .totle{
                        font-size: 26rpx;
                        text-align: right;      
                        .num{
                            font-size: 30rpx;
                        }                
                    }
                }
            }
        }
    }
</style>
