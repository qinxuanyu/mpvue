<template>
    <div class="circle">
        <mp-navbar
            v-model="activeIndex"
            :columns="columns"
        >
          
            <div
            v-for="(item, index) in columns"
            v-if="activeIndex === index"
            class="weui-tab__content"
            :key="item"
            >
                {{item}}的内容
            </div>
        </mp-navbar>
        <div class="nc-line"></div>
        <div class="circle-list">
            <ul>
                <li class="item">
                    <div class="top">
                        <img src="" alt="">
                        <p>一笑很甜</p>
                        <span>2018-11-12</span>
                    </div>
                    <p class="content">上次去农庄玩的时候在农场菜地买的一株小辣椒，买回
来给女儿玩的，现在两个月了都长成图二的样子了。</p>
                    <div class="img-box">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <img src="" alt="">
                            <span>13</span>
                        </div>
                        <div class="item">
                            <img src="" alt="">
                            <span>18</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <integral-goods-list></integral-goods-list>
    </div>
</template>
<script>
    import MpNavbar from 'mp-weui/packages/navbar'
    import integralGoodsList from '@/components/Integral-goods-list'
    export default {
        data (){
            return{
                columns: ['圈子', '我的'],
                activeIndex: 0,
            }
        },
        components:{ MpNavbar, integralGoodsList }
    }
</script>
<style lang="less" scoped>
    .circle{
        .circle-list{
            ul{
                >.item{
                    padding: 22rpx 26rpx;
                    border-bottom: 1px solid #f5f5f5;                      
                    .top{
                        display: flex;
                        align-items: center;
                        img{
                            width: 54rpx;
                            height: 54rpx;
                            border-radius: 50%;
                            overflow: hidden;
                        }
                        p{
                            flex: 1;
                            font-size: 26rpx;
                            color: #565656;
                        }
                        span{
                            font-size: 24rpx;
                            color: #8f8f8f;
                        }
                    }
                    .content{
                        font-size: 28rpx;
                        margin: 23rpx 0 20rpx 0;
                    }
                    .img-box{
                        display: flex;
                        flex-wrap: wrap;
                        img{
                            width: 220rpx;
                            height: 200rpx;
                            margin: auto;
                        }
                    }
                    .bottom{
                        display: flex;
                        justify-content: flex-end;
                        margin-left: 25rpx;
                        .item{
                            display: flex;
                            align-items: center;
                            img{
                                width: 33rpx;
                                height: 33rpx;
                            }
                            span{
                                color: #4d4d4d;
                                font-size: 26rpx;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
