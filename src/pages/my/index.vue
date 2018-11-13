<template>
    <div  class="my">
        <div class="top">
            <div class="icon">
                <img src="" alt="">
                <img src="" alt="">
            </div>
            <div class="avatar">
                <img src="" alt="">
                <span>LV2</span>
            </div>
            <p class="name">快乐</p>
            <a href="" class="link">签到</a>
        </div>
        <div class="middle">
            <div class="item" v-for="(item,index) in tabList" :key="index" :style="{color : item.textColor , background : item.backgroundColor}">
                <a class="box">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </a>
            </div>
           
        </div>
        <div class="cell">
            <mp-cell   
                v-for="(item,index) in cellList" 
                :key="index"
                :content="item.label" 
                iconSrc="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2486956696,687545127&fm=27&gp=0.jpg"
            />
        </div> 
            
     
    </div>
</template>
<script>
    import MpCell from 'mp-weui/packages/cell'
    import mpCellGroup from 'mp-weui/packages/cell-group';
    export default{
        data (){
            return{
                tabList:[{
                    title:'我的郊游',
                    img:'',
                    backgroundColor:'#cafec4',
                    textColor:'#3abf6d'
                },{
                    title:'领养领种',
                    img:'',
                    backgroundColor:'#fee4c0',
                    textColor:'#8d6a3a'
                },{
                    title:'我的郊游',
                    img:'',
                    backgroundColor:'#fdd5cf',
                    textColor:'#fa7664'
                }],
                cellList:[{
                    label:'收藏',
                    icon:''
                },{
                    label:'地址管理',
                    icon:''
                },{
                    label:'优惠券',
                    icon:''
                },{
                    label:'积分专区',
                    icon:''
                },{
                    label:'分享收益',
                    icon:''
                }]
            }
        },
        components:{MpCell,mpCellGroup}
    }    
</script>
<style lang="less" scoped>
    .my{
        .top{
            height: 237rpx;
            padding: 0 29rpx;
            position: relative;
            .icon{
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: space-between;
                img{
                    width: 30rpx;
                    height: 30rpx;
                }
            }
            .avatar{
                width: 127rpx;
                height: 127rpx;
                position: relative;
                margin: 24rpx auto 32rpx auto;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                span{
                    position: absolute;
                    bottom: -12rpx;
                    font-size: 24rpx;
                    background: #f9bc27;
                    padding: 5rpx;
                    line-height: 24rpx;
                    left: 50%;
                    transform: translate(-50%)
                }
            }
            .name{
                font-size: 30rpx;
                text-align: center;
            }
            .link{
                width: 95rpx;
                height: 50rpx;
                position: absolute;
                font-size: 30rpx;
                // padding: 11rpx 23rpx;
                line-height: 50rpx;
                text-align: center;
                border-radius: 25rpx 0 0 25rpx;
                color: #fff;
                right: 0;
                bottom: 60rpx;
                background-color: #36bd66;
            }
        }
        .middle{
            padding: 24rpx 29rpx;
            background-color: #f3f3f3;
            display: flex;
            justify-content: space-between;
            .item{
                width: 211rpx;
                height: 157rpx;
                padding: 12rpx;
                box-sizing: border-box;
                .box{
                    width: 100%;
                    height: 100%;
                    border: 1px solid #fff;
                    font-size: 28rpx;
                    text-align: center;
                    img{
                        width: 63rpx;
                        height: 75rpx;
                    }
                }
            }
        }

    }
</style>
