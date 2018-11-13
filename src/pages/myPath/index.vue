<template>
    <div class="my-path">
        <ul>
            <li class="">
                <img src="" alt="" mode="center">
                <div class="text">
                    <div class="name">开心农家乐</div>
                    <p class="time">2018-11-10</p>
                    <p class="num">￥260.00</p>
                </div>
                <button>评价</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .my-path{
        ul{
            li{
                display: flex;
                align-items: center;
                padding: 23rpx 20rpx;
                border-bottom: 1px solid #f4f4f4;             
                img{
                    width: 202rpx;
                    height: 176rpx;
                }
                .text{
                    flex: 1;
                    .name{
                        font-size: 30rpx;

                    }
                    .time{
                        font-size: 24rpx;
                        color: #8f8f8f;
                    }
                    .num{
                        font-size: 26rpx;
                        color: #f11010;
                        margin-top: 64rpx;
                    }
                }
                button{
                    width: 160rpx;
                    height: 57rpx;
                    line-height: 57rpx;
                    font-size: 28rpx;
                    color: #fff;
                    background-color: #39b27d;
                }
            }
        }
    }
</style>
