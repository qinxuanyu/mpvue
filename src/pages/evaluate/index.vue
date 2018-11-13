<template>
    <div class="evaluate">
        <ul class="list">
            <li>
                <div class="top">
                    <div class="avatar">
                        <img src="" alt="">
                        <span>快乐</span>
                    </div>
                    <div class="num">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="time">2018-11-03</div>
                </div>
                <p class="content">
                    农庄很不错！周末带孩子们去玩，都玩的很开心，可以
                    玩的项目很多，钓鱼采摘，周边停车也方便。</p>
                <div class="images">
                    <img src="" alt="" mode="center" @click="previewImage()">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data (){
            return {

            }
        },
        methods:{
            previewImage (){
                wx.previewImage({
                    current: '', // 当前显示图片的http链接
                    urls: [] // 需要预览的图片http链接列表
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .evaluate{
        .list{
            li{
                padding: 17rpx;
                border-bottom: 1px solid #dbdbdb;
                .top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .avatar{
                        display: flex;
                        font-size: 26rpx;
                        color: #565656;
                        img{
                            width: 53rpx;
                            height: 53rpx;
                            border-radius:50%;
                            overflow: hidden;
                        }
                    }
                    .num{
                        display: flex;
                        img{
                            width: 26rpx;
                            height: 26rpx;
                            margin-left: 13rpx;
                        }
                    }
                    .time{
                        font-size: 24rpx;
                        color: #8f8f8f;
                    }
                }
                .content{
                    font-size: 28rpx;
                }
                .images{
                    display: flex;
                    flex-wrap: wrap;
                    img{
                        width: 220rpx;
                        height: 210rpx;
                        margin-right: 16rpx;
                    }
                }
            }
        }
    }
</style>
