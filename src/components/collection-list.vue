<template>
    <div class="collection-list">
        <ul>
            <li class="item">
                <img src="" alt="" mode="center">
                <div class="text"> 
                    <p>农家走地鸡 喂食五谷杂粮 土鸡蛋60枚</p>
                    <div class="num">
                        <span class="red">￥60</span>
                        <span class="distance"><i></i></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            listData:Array,
            isDistance:Boolean
        }
    }
</script>
<style lang="less" scoped>
    .collection-list{
        ul{
            .item{
                display: flex;
                padding: 20rpx 32rpx;
                border-bottom: 1px solid #f4f4f4;
                >img{
                    width: 174rpx;
                    height: 152rpx;
                }
                .text{
                    padding-left: 40rpx;
                    p{
                        min-height: 100rpx;
                        font-size: 30rpx;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .num{
                        display: flex;
                        justify-content: space-between;
                        .red{
                            font-size: 34rpx;
                            color: #f11010;
                        }
                        .distance{
                            color: #8f8f8f;
                            font-size: 28rpx;
                        }
                    }
                }
            }
        }
    }
</style>
