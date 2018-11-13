<template>
    <div class="my-site">
        <ul>
            <li class="item">
                <div class="name">
                    <span>ds</span>
                    <span>15907735561</span>
                </div>
                <p>
                    广东省深圳市龙岗区雅宝路星河worldB栋16层
                    1601A-01
                </p>
                <div class="btn">
                    <span>编辑</span>
                    <span>删除</span>
                </div>
            </li>
        </ul>
        <button class="submit-btn-bottom">
            +新增地址
        </button>
    </div>
</template>
<script>
    export default{

    }
    
</script>
<style lang="less" scoped>
    .my-site{
        min-height: 100vh;
        background-color: #f3f3f3;
        ul{
            background-color: #fff;
            .item{
                padding: 34rpx 37rpx;
                border-bottom: 1px solid #f4f4f4;
                .name{
                    display: flex;
                    justify-content: space-between;
                    font-size: 28rpx;
                }
                p{
                    margin: 26rpx 0 28rpx 0;
                    font-size: 26rpx;
                }
                .btn{
                    display: flex;
                    justify-content: flex-end;
                    font-size: 26rpx;
                    span:nth-child(1){
                        margin-right: 70rpx;
                    }
                }
            }
        }
    }
</style>
