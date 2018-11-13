<template>
    <div class="my-info">
        <div class="avatar">
            <img src="" alt="">
            <p>点击修改头像</p>
        </div>
        <mp-cell
            content="用户名"
            label="快乐"
        />
        <mp-cell
            content="性别"
            label="男"
        />
         <mp-cell
            content="出生日期"
            label="1993-03-04"
        />
         <mp-cell
            content="地址管理"
            label=""
        />
    </div>
</template>
<script>
    import MpCell from 'mp-weui/packages/cell'
    export default {
        data (){
            return{

            }
        },
        components:{MpCell}
    }   
</script>
<style lang="less">
    .my-info{
        min-height: 100vh;
        background-color: #f3f3f3;
        .avatar{
            padding-bottom: 30rpx;
            img{
                width: 137rpx;
                height: 137rpx;
                border-radius: 50%;
                margin: 36rpx auto 20rpx auto;
            }
            p{
                font-size: 26rpx;
                text-align: center;
                color: #999999;
            }
        }
        .weui-cell{
            background-color: #fff;
            border-bottom: 1px solid #f5f5f5;
        }
        .weui-cell::before{
            border: 0;
            height: 0;
        }
    }
</style>
