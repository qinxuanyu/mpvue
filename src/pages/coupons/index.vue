<template>
    <div class="coupons">
        <ul>
            <li class="clearfix">
                <div class="left">
                    <p class="type"><span>￥10</span>满减券</p>
                    <p class="num">全站满￥190减￥25</p>
                </div>
                <div class="rigth">
                    <p class="btn">
                        立即<br>
                        领取
                    </p>
                    <!-- <p></p> -->
                </div>
            </li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    
</script>
<style lang="less" scoped>
    .coupons{
        ul{
            // padding: 0 23rpx;           
            li{
                display: flex;
                width: 700rpx;
                margin: 27rpx auto 0 auto;
                text-align: center;
                color: #fc2828;
                .left{
                    width: 490rpx;
                    height: 190rpx;
                    float: left;
                    text-align: left;
                    .type{
                        font-size: 36rpx;
                        span{
                            font-size: 72rpx;
                            margin-right: 7rpx;
                        }
                    }
                    .num{
                        font-size: 26rpx;
                    }
                }
                .rigth{
                    width: 210rpx;
                    height: 190rpx;
                    margin-top: 26rpx;
                    float: left;
                    .btn{
                        font-size: 46rpx;
                    }
                }
            }
        }
    }
</style>
