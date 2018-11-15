<template>
    <div class="order-detail">
        <div class="state">订单已完成</div>
        <a href="" class="logistics">
            <div class="left">
                <p class="title">配送信息</p>
                <p class="company">暂未发货 || 天天快递：46768454524254</p>
                <p class="info">"已签收，签收人是本人】</p>
                <p class="time">2018-07-22 00:10:48</p>
            </div>
            <img src="" alt="">
        </a>
        <div class="nc-line"></div>
        <div class="goods-list">
            <div class="name">
                开心农家乐
            </div>
            <order-goods-list></order-goods-list>
             <mp-cell
                content="配送"
                label="￥25.0"
            />
             <mp-cell
                content="优惠券"
                label="-￥10.0"
            />
        </div>
        <div class="totle">                 
            <span>实付</span>
            <span class="num">￥153.0</span>
        </div>
        <div class="order-info">
            <p class="title">订单信息</p>
            <p class="text">订单号码：201811093521</p>
            <p class="text">下单时间：2018-11-09 13:20:56</p>
            <p class="text">支付方式：微信</p>
            <div class="btn">
                <button class="border">找客服</button>
                <button class="gray">取消订单</button>
                <button class="background">付款</button>
            </div>
        </div>
    </div>
</template>
<script>
    import orderGoodsList from '@/components/order-goods-list'
    import MpCell from 'mp-weui/packages/cell'
    export default {
        data (){
            return{

            }
        },
        components:{ orderGoodsList, MpCell }
    }
</script>
<style lang="less" scoped>
    .order-detail{
        .state{
            font-size: 30rpx;
            line-height: 70rpx;
            text-align: center;
            background-color: #f3f3f3;
        }
        .logistics{
            display: flex;
            align-items: center;
            padding: 20rpx 34rpx;
            .left{
                flex: 1;
                .title{
                    font-size: 28rpx;
                }
                .company{
                    font-size: 26rpx;
                    line-height: 50rpx;
                }
                .info{
                    font-size: 26rpx;

                }
                .time{
                    font-size: 26rpx
                }
            }
            >img{
                width: 18rpx;
                height: 35rpx;
            }
        }
        .goods-list{
            .name{
                padding: 27rpx 33rpx;
                font-size: 26rpx;
                border-bottom: 1px solid #dbdbdb;
            }
        }
        .totle{
            text-align: right;
            padding: 0 35rpx;
            line-height: 77rpx;
            font-size: 28rpx;
            color: #565656;
            background-color: #f3f3f3;
            .num{
                font-size: 40rpx;
                color: #f11010;
            }
        }
        .order-info{
            padding: 24rpx 34rpx;
            .title{
                font-size: 28rpx;
                color: #2f2f2f;
            }
            .text{
                 font-size: 26rpx;
                 color: #999999;
            }
            .btn{
                height: 96rpx;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                button{
                    width: 160rpx;
                    height: 57rpx;
                    font-size: 28rpx;
                    line-height: 57rpx;
                    margin: 0;
                    margin-left: 22rpx;
                }
                .border{
                    background-color: #fff;
                    color: #39b27d;
                    border: 1px solid #39b27d;
                }
                .gray{
                    background-color: #bababa;
                    color: #6a6a6a;
                }
                .background{
                    background-color: #39b27d;
                    color: #fff;
                }
            }
        }
    }
</style>
