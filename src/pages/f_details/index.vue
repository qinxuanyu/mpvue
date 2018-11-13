<template>
    <div class="f-details">
         <swiper :autoplay="true" :indicator-dots="true" indicator-color="#e8e8e8" indicator-active-color="#60a609" class="swiper">
             <swiper-item>
                <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1082862537,3573447771&fm=27&gp=0.jpg" class="slide-image" width="355" height="150"/>
            </swiper-item>
             <swiper-item>
                <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1082862537,3573447771&fm=27&gp=0.jpg" class="slide-image" width="355" height="150"/>
            </swiper-item>
        </swiper>
        <div class="share">
            <p>分享给朋友，您和朋友都能获得￥30优惠劵</p>
            <img src="" alt="">
        </div>
        <div class="link-box">
            <ul>
                <li class="pink ">
                    <img src="" alt="">
                    <p>积分兑换</p>
                </li>
                <li class="green">
                    <img src="" alt="">
                    <p>手机买单</p>
                </li>
                <li class="orange">
                    <img src="" alt="">
                    <p>领养领种</p>
                </li>
                <li class="max orange">
                    <img src="" alt="">
                    <p>最新活动</p>
                </li>
                <li class="pink ">
                    <img src="" alt="">
                    <p>农场优品</p>
                </li>
                <li class="gray">
                    <img src="" alt="">
                    <p>优惠券</p>
                </li>
                <li class="orange">
                    <img src="" alt="">
                    <p>研学知识</p>
                </li>
                <li class="green">
                    <img src="" alt="">
                    <p>庄园地图</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{

    }    
</script>
<style lang="less" scoped>
    .f-details{
        .swiper{
            height: 440rpx;
            image{
                width: 100%;
                height: 440rpx;
            }
        }
        .share{
            display: flex;
            padding: 0 20rpx;
            align-items: center;
            img{
                width: 37rpx;
                height: 39rpx;
            }
            p{
                line-height: 80rpx;
                font-size: 28rpx;
                
            }
        }
        .link-box{
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    // width: 33.33%;
                    width: 234rpx;
                    height: 233rpx;
                    margin: 9rpx;
                    font-size: 26rpx;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    img{
                        width: 83rpx;
                        height: 75rpx;
                        margin: 0 auto;
                    }
                    p{
                        color: #44494b !important;
                    }
                }
                .max{
                    width: 480rpx;
                }
                .pink {
                    background-color: #fecfc8;
                }
                .green{
                    background-color: #cafec4;
                }
                .orange{
                    background-color: #fee4c0;
                }
                .gray{
                    background-color: #fedfce;
                }
            }
        }
    }
    
</style>
