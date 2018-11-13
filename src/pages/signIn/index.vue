<template>
    <div class="sign-in"> 
        <div class="top">
            <div class="info">
                <img src="" alt="">
                <div class="middle">
                    <div class="name">
                        <span>快乐</span>
                        <span>LV2</span>
                    </div>
                    <div class="link">积分专区</div>
                </div>
                <button>签到</button>
            </div>
            <div class="flow">
                <p>10赠币</p>
                <ul class="box">
                    <li class="active">
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                    <li>
                        <i></i>
                        <div></div>
                    </li>
                </ul>
                <ul class="num">
                    <li>第1天</li>
                    <li>第2天</li>
                    <li>第3天</li>
                    <li>第4天</li>
                    <li>第5天</li>
                    <li>第6天</li>
                    <li>第7天</li>
                </ul>
            </div>
        </div>
       <i-g-list></i-g-list>
    </div>
</template>
<script>
    import IGList from '@/components/Integral-goods-list'
    export default {
        data (){
            return{

            }
        },
        components:{IGList},
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    .sign-in{
        .top{
            padding: 37rpx 33rpx;
            font-size: 28rpx;
            background: #f3f3f3;
            .info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                >img{
                    width: 110rpx;
                    height: 110rpx;
                    border-radius: 50%;
                    overflow: hidden;
                }
                .middle{
                    flex: 1;
                    padding-left: 24rpx;
                    .name{
                        display: flex;
                        color: #961914;
                        align-items: flex-end;
                        line-height: 1;
                        span:nth-child(2){
                            height: 25rpx;
                            line-height: 25rpx;
                            font-size: 22rpx;
                            padding: 0 10rpx;
                            border-radius: 2px;
                            background-color: #f9bc27;
                            color: #fff;
                        }
                    }
                    .link{
                        margin-top: 30rpx;
                        color: #961914;

                    }
                }
                button{
                    width: 154rpx;
                    height: 70rpx;
                    line-height: 70rpx;
                    margin: 0;
                    border-radius: 35rpx;
                    color: #ffa800;
                    border: 1px solid #ffa800;
                    box-shadow: 0 2px 2px #ffa800;
                }
            }
            .flow{
                padding: 36rpx 25rpx 025rpx;
                >p{
                    font-size: 24rpx;
                    color: #ff1e00;
                    margin-bottom: 10rpx;
                    text-align: right;
                }
                .box{
                    overflow: hidden;
                    display: flex;
                    li{
                        display: flex;
                        align-items: center;
                        i{
                            width: 35rpx;
                            height: 35rpx;
                            border-radius: 50%;
                            background: #961914;

                        }
                        div{
                            width: 67rpx;
                            height: 4rpx;
                            background: #961914;

                        }
                    }
                }
                .num{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20rpx;
                    li{
                        // flex: 1;
                        text-align: center;
                        font-size: 24rpx;
                    }
                }
            }
        }
        
    }
</style>
