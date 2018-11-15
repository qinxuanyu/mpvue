<template>
    <div class="place-order">
        <radio-group class="radio-group" bindchange="radioChange" >
            <label class="radio" v-for="(item,index) in items" :key="index">
                <radio :value="item.name" :checked="item.checked" color="#39b27d" />{{item.value}}
            </label>
        </radio-group>
        <div class="site">
            <img class="left" src="" alt="">
            <div class="middle">
                <div>
                    <span>收货人:qin</span>
                    <span>13333333333</span>
                </div>
                <p></p>
            </div>
            <img class="right" src="" alt="">
        </div>
        <div class="nc-line"></div>
        <div class="list">
             <order-goods-list></order-goods-list>
            <mp-cell
                content="标题文字"
                label="说明文字"
            />
        </div>
        <div class="card">
            <div class="total">
                <span class="title">总价</span>
                <span class="num">￥79.8</span>
            </div>
            <div class="quantity">共2件商品</div>
            <div class="btn">想要</div>
        </div>
    </div>
</template>
<script>
    import MpCell from 'mp-weui/packages/cell'
    import orderGoodsList from '@/components/order-goods-list'
    export default {
        data (){
            return {
                items: [
                    {name: 1, value: '快递配送￥25.00',checked: 'true'},
                    {name: '2', value: '到店自取￥0.00', },
                   
                ]
            }
        },
        components:{ MpCell, orderGoodsList },
        onLoad () {
            this.toast('tishi')
        },
    }
</script>
<style lang="less" scoped>
    .place-order{
        min-height: 100vh;
        background-color: #f3f3f3;
        .radio-group{
            background-color: #fff;
            font-size: 30rpx;
            padding: 30rpx 40rpx;
            display: flex;
            justify-content: space-between;
            radio{
                // width: 37rpx;
                // height: 37rpx;
            }
        }
        .site{
            background-color: #fff;

            display: flex;
            justify-content: space-between;
            padding: 22rpx 33rpx;
            align-items: center;
            .left{
                width: 42rpx;
                height: 51rpx;
            }
            .middle{
                flex: 1;
                font-size: 26rpx;
                padding: 0 43rpx 0 25rpx;
                >div{
                    display: flex;
                    justify-content: space-between;
                }
            }
            .right{
                width: 16rpx;
                height: 31rpx;
            }
        }
        .list{
            background-color: #fff;
            overflow: hidden;
        }
        .card{
            width: 100%;
            height: 97rpx;
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            border-top: 1px solid #dbdbdb;
            background-color: #fff;
            .total{
                flex: 1;
                display: flex;
                padding-left: 25rpx;
                align-items: center;
                img{
                    width: 50rpx;
                    height: 50rpx;
                }
                .title{
                    color: #999;
                    font-size: 26rpx;
                }
                .num{
                    color: #f11010;
                    font-size: 32rpx;
                }
            }
            .quantity{
                font-size: 26rpx;
                line-height: 97rpx;
                padding-right: 24rpx;
            }
            .btn{
                width: 227rpx;
                height: 97rpx;
                font-size: 30rpx;
                color: #fff;
                background-color: #39b27d;
                line-height: 97rpx;
                text-align: center;
            }
        }
    }
</style>
