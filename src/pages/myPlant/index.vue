<template>
    <div class="my-plant">
        <ul>
            <li>
                <img src="" alt="" mode="center">
                <div class="middle">
                    <p class="name">盆栽辣椒</p>
                    <p class="num">数量3</p>
                </div>
                <button>状态</button>
            </li>
        </ul>
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
           
        }
    }
</script>
<style lang="less" scoped>
    .my-plant{
        ul{
            li{
                display: flex;
                padding: 20rpx 35rpx;
                align-items: center;
                border-bottom: 1px solid #f4f4f4;
                img{
                    width: 174rpx;
                    height: 152rpx;
                }
                .middle{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-left: 40rpx;
                    .name{
                        font-size: 30rpx;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .num{
                        font-size: 28rpx;
                        color: #8f8f8f;
                    }
                }
                button{
                    width: 160rpx;
                    height: 57rpx;
                    font-size: 28rpx;
                    line-height: 57rpx;
                    background-color: #39b27d;
                    color: #fff;
                    margin: 0;
                    margin-left: 20rpx;
                }
            }
        }
    }
</style>
