<template>
    <div class="goods-detail">
         <swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#60a609" indicator-color="#fff">
        
            <swiper-item v-for="(item,index) in imgUrls" :key="index">
                <image :src="item" class="slide-image" width="355" height="150"/>
            </swiper-item>
        </swiper>
        <div class="main">
            <div class="name">
                <p>农庄自家菜地种植 绿色无污染有机 小白菜 2斤装</p>
                <img src="" alt="">
            </div>
            <div class="price">
                <div class="left">
                    <span class="num">￥22.2</span>
                    <span class="sales">已售63</span>
                </div>
                <button>加入购物车</button>
            </div>
        </div>
        <div class="line">
            <div></div>
            <span>图文详情</span>
        </div>
        <div class="nodes"></div>
    </div>
</template>
<script>
    export default {
        data (){
            return{
                imgUrls: [
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
                ],
            }
        },
        components:{}
    }
</script>
<style lang="less" scoped>
    .goods-detail{
        swiper{
            height: 600rpx;
            image{
                width: 100%;
                height: 100%;
            }
        }
        .main{
            
            padding: 26rpx 32rpx;
            .name{
                display: flex;
                p{
                    font-size: 30rpx;

                }
                img{
                    width: 42rpx;
                    height: 38rpx;
                    margin-left: 30rpx;
                }
            }
            .price{
                display: flex;
                .left{
                    flex: 1;
                    font-size: 26rpx;
                    .sales{
                        color: #999999;
                    }
                    .num{
                        color: #f11010;
                    }
                }
                button{
                    width: 153rpx;
                    height: 55rpx;
                    padding: 0;
                    line-height: 55rpx;
                    font-size: 26rpx;
                    color: #fff;
                    background-color: #39b27d;
                }
            }
        }
        .line{
            padding: 40rpx 143rpx;
            background-color: #f3f3f3;
            position: relative;
            div{
                height: 1px;
                width: 100%;
                background-color: #bdbdbd;
            }
            span{
                width: 162rpx;
                font-size: 28rpx;
                position: absolute;
                position: absolute;
                left: 50%;
                top: 20rpx;
                transform:translate(-50%);
                background-color: #f3f3f3;
                text-align: center;
            }
        }
    }
</style>
