<template>
    <div class="s-evaluate">
        <div class="top">
            <img src="" alt="">
            <p class="name">开心农家乐</p>
        </div>
        <div class="cell">
            <span class="label">为庄园打分</span>
            <div class="right">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
        <div class="cell">
            <span class="label">人均消费</span>
            <div class="right">
               <span>￥</span>
               <input type="text" placeholder="请输入消费金额">
            </div>
        </div>
        <div class="bottom">
            <textarea  cols="30" rows="10" placeholder="对农庄还满意吗？请留下您的评价"></textarea>
        </div>
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
       <button class="submit-btn">发布</button>
    </div>
</template>
<script>
    export default {
        data(){
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
    .s-evaluate{
        .top{
            >img{
                width: 128rpx;
                height: 111rpx;
                margin: 25rpx auto;
            }
            .name{
                font-size: 30rpx;
                text-align: center;
                margin-bottom: 30rpx;
            }
        }
        .cell{
            display: flex;
            align-items: center;
            line-height: 100rpx;
            padding: 0 34rpx;
            .label{
                flex: 1;
                font-size: 28rpx;
            }
            .right{
                flex: 3;
                display: flex;
                align-items: center;
                font-size: 28rpx;
                img{
                    width: 26rpx;
                    height: 26rpx;
                }
            }
        }
        .bottom{
            textarea{
                width: 100%;
                height: 235rpx;
                font-size: 26rpx;
                padding: 34rpx;
                box-sizing: border-box;
            }
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
            position: fixed;
            right: 50rpx;
            bottom: 50rpx;
            background-color: #39b27d;
        }
    }
</style>
