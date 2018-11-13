<template>
    <div class="submit-plant">
       <div class="main">
            <textarea  cols="30" rows="10" placeholder="说点什么吧..."></textarea>
            <div class="upload" @click.stop="chooseImage">
                <div class="img-btn">
                    <img src="" alt="">
                    <span>添加图片</span>
                </div>
                <p>最多上传6张图片</p>
            </div>
            <div class="img-box" >
                <img :src="item" alt="" mode="center" v-for="(item,index) in tempFilePaths" :key="index">
            </div>
       </div>
       <button class="submit-btn">发布</button>
    </div>
</template>
<script>
    export default {
        data (){
            return{
                tempFilePaths:[]
            }
        },
        methods:{
            chooseImage (){
                let _this = this;
                wx.chooseImage({
                    count: 6,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success (res) {
                        // tempFilePath可以作为img标签的src属性显示图片
                        _this.tempFilePaths = res.tempFilePaths;

                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .submit-plant{
        min-height: 100vh;
            background-color: #f3f3f3;

        .main{
            padding: 30rpx 40rpx;
            background-color: #fff;

        }
        textarea{
            width: 100%;
            height: 250rpx;
            font-size: 26rpx;
        }
        .upload{
            display: flex;
            font-size: 24rpx;
            align-items: flex-end;
            padding: 34rpx;

            .img-btn{
                width: 126rpx;
                height: 122rpx;
                border: 1px dashed #f3f3f3;
                img{
                    display: block;
                    width: 44rpx;
                    height: 38rpx;
                    margin: 24rpx auto 16rpx auto;
                }
                span{
                    // font-size: 22rpx;
                    text-align: center;
                    color: #727272;

                }
            }
            p{
                color: #727272;
                margin-left: 22rpx;
            }
        }
        .img-box{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 34rpx;

            img{
                width: 126rpx;
                height: 122rpx;
                margin: 8rpx;
            }
        }
        .submit-btn{
            width: 175rpx;
            height: 77rpx;
            line-height: 77rpx;
            font-size: 32rpx;
            color: #fff;
            background-color: #39b27d;
            margin-right: 50rpx;
            margin-top: 50rpx;
        }
    }
</style>
