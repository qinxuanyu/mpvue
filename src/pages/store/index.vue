<template>
    <div class="store">
        <swiper :indicator-dots="true" :autoplay="true">
        
            <swiper-item v-for="(item,index) in imgUrls" :key="index">
                <image :src="item" class="slide-image" width="355" height="150"/>
            </swiper-item>
        </swiper>
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
        <div class="list">
            <div class="class" >
                <ul>
                    <li class="active">蛋类</li>
                    <li>蔬菜</li>
                </ul>
            </div>
            <div class="goods">
                <ul>
                    <li>
                        <img src="" alt="" mode="center">
                        <div class="main">
                            <p>农家走地鸡鸡蛋30枚</p>
                            <p class="sales">已售51</p>
                            <div class="bottom">
                                <span>388积分</span>
                                <div class="operation">
                                    <span class="subtract">-</span>
                                    <span class="num">1</span>
                                    <span class="add">+</span>
                                </div>
                                <!-- <button>去看看</button> -->
                            </div>
                        </div>
                    </li>          
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="total">
                <img src="" alt="">
                <span class="title">总价</span>
                <span class="num">￥79.8</span>
            </div>
            <div class="btn">想要（1）</div>
        </div>
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
        }
    }
</script>
<style lang="less" scoped>
    .store{
        swiper{
            height: 340rpx;
            image{
                width: 100%;
                height: 100%;
            }
        }
        .srot{
            display: flex;
            justify-content: space-around;
            padding: 32rpx 0;
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
        .list{
            display: flex;
            padding-bottom: 97rpx;
            .class{
                width: 160rpx;
                display: flex;
                flex-direction: column;
                background-color: #f3f3f3;
                text-align: center;
                ul{
                    li{
                        font-size: 28rpx;
                        line-height: 90rpx;
                    }
                    .active{
                        background-color: #fff;
                    }
                }
            }
            .goods{
                flex: 1;
                padding: 0 18rpx;
                ul{
                    li{
                        display: flex;
                        padding: 23rpx 20rpx;
                        // border-bottom: 1px solid #f4f4f4;
                        margin-top: 17rpx;
                        img{
                            width: 181rpx;
                            height: 179rpx;
                        }
                        .main{
                            padding-left: 13rpx;
                            flex: 1;
                            p{
                                // height: 110rpx;
                                font-size: 30rpx;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                            }
                            .sales{
                                font-size: 26rpx;
                                color: #999999;
                            }
                            .bottom{
                                display: flex;
                                justify-content: space-between;
                                font-size: 28rpx;
                                >span{
                                    color: #f11010;
                                }
                                .operation{
                                    text-align: center;
                                    font-size: 40rpx;
                                    line-height: 47rpx;
                                    .add{
                                        display: inline-block;
                                        width: 49rpx;
                                        height: 49rpx;
                                        border-radius: 50%;
                                        background-color: #39b27d;
                                        
                                    }
                                    .subtract{
                                        display: inline-block;
                                        width: 47rpx;
                                        height: 47rpx;
                                        border-radius: 50%;
                                        // background-color: #fff;
                                        border: 1px solid #bdbdbd;
                                        color: #bdbdbd;
                                    }
                                    .num{
                                        font-size: 34rpx;
                                        margin: 0 10rpx;
                                    }
                                }
                                button{
                                    width: 159rpx;
                                    height: 57rpx;
                                    font-size: 28rpx;
                                    line-height: 57rpx;
                                    margin: 0;
                                    background-color: #39b27d;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .card{
            width: 100%;
            height: 97rpx;
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            border-top: 1px solid #dbdbdb;
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
