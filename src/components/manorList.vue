<template>
    <div class="manor-list">
        <ul>
            <li>
                <img src="" alt="">
                <div class="name">
                    <p>开心农家乐家庭组</p>
                    <div class="price">
                        <span>人均</span>
                        <span>￥80</span>
                    </div>
                </div>
                <div class="site">
                    <p class="distance">
                        <i></i>
                        海淀22Km
                    </p>
                    <p class="num">已有<span>624</span>人次游玩</p>
                </div>
            </li>
           
        </ul>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="less" scoped>
    .manor-list{
        ul{
            padding-left: 23rpx;
            li{
                display: flex;
                padding:  20rpx 23rpx 20rpx 0;
                border-bottom: 1px solid #dbdbdb;
                >img{
                    width: 202rpx;
                    height: 192rpx;
                }
                .name{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    p{
                        font-size: 30rpx;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                    .price{
                        span:nth-child(1){
                            font-size: 26rpx;
                            color: #888888;
                        }
                        span:nth-child(2){
                            font-size: 34rpx;
                            color: #f11010;
                        }
                    }
                }
                .site{
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    .distance{
                        display: flex;
                        font-size: 26rpx;
                        color: #565656;
                        align-items: center;
                        justify-content: flex-end;
                        i{
                            width: 23rpx;
                            height: 28rpx;
                        }
                    }
                    .num{
                        color: #888888;
                        font-size: 24rpx;
                        span{
                            color: #39b27d;
                        }
                    }
                }
            }
        }
    }
</style>
