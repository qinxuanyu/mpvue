<template>
    <div class="integral-list">
        <ul>
            <li>
                <img src="" alt="" mode="center">
                <div class="main">
                    <p>农家走地鸡鸡蛋30枚</p>
                    <div class="bottom">
                        <span>388积分</span>
                        <button>去看看</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .integral-list{
        ul{
            li{
                display: flex;
                padding: 23rpx 20rpx;
                border-bottom: 1px solid #f4f4f4;
                img{
                    width: 202rpx;
                    height: 176rpx;
                }
                .main{
                    padding-left: 24rpx;
                    flex: 1;
                    p{
                        height: 110rpx;
                        font-size: 30rpx;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                    .bottom{
                        display: flex;
                        justify-content: space-between;
                        font-size: 28rpx;
                        span{
                            color: #f11010;
                        }
                        button{
                            width: 159rpx;
                            height: 57rpx;
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
</style>
