<template>
    <div class="integral-list">
        <ul>
            <li class="item">
                <div>
                    <p class="time">{{title}}</p>
                    <p class="type">{{inlineDesc}}</p>
                </div>
                <span>{{content}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        neme:'cell',
        data (){
            return{

            }
        },
        props:{
            title:String,
            inlineDesc:String,
            content:String
        }
    }
</script>
<style lang="less" scoped>
    .integral-list{
        ul{
            .item{
                padding: 36rpx 38rpx;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #f4f4f4;
                div{
                    .time{
                        font-size: 28rpx;
                        color: #888888;
                    }
                    .type{
                        font-size: 30rpx;
                    }
                }
                >span{
                    color: #f11010;
                    font-size: 34rpx;
                }
            }
        }
    }
</style>
