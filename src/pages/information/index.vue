<template>
    <div class="information">
        <div class="bottom">
            <div class="input-wrap">
                <input type="text" placeholder="写评论">
            </div>
            <div class="icon">
                <img src="" alt="">
                <span>22</span>
            </div>
            <div class="icon">
                <img src="" alt="">
                <span>22</span>
            </div>
            <div class="icon">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    import MpSearch from 'mp-weui/packages/search'
    export default{
        data (){
            return{

            }
        },
        components: {
            MpSearch
        }
    }
</script>
<style lang="less" scoped>
    .information{
        padding-bottom: 96rpx;
        .bottom{
            width: 100%;
            height: 96rpx;
            padding:  0 23rpx;
            border-top: 1px solid #bdbdbd;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            bottom: 0;
            left: 0;
            .input-wrap{
                padding: 0 40rpx 0 80rpx;
                height: 57rpx;
                border-radius: 28.5rpx;
                background-color: #dcdcdc;
                input{
                    font-size: 26rpx;
                }
            }
            .icon{
                display: flex;
                font-size: 26rpx;
                align-items: center;
                img{
                    width: 33rpx;
                    height: 33rpx;
                }
            }
        }
    }
</style>
