<template>
    <div class="details">
        <swiper :autoplay="true" :indicator-dots="true" indicator-color="#e8e8e8" indicator-active-color="#60a609" class="swiper">
             <swiper-item>
                <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1082862537,3573447771&fm=27&gp=0.jpg" class="slide-image" width="355" height="150"/>
            </swiper-item>
             <swiper-item>
                <image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1082862537,3573447771&fm=27&gp=0.jpg" class="slide-image" width="355" height="150"/>
            </swiper-item>
        </swiper>
        <div class="main">
            <div class="name">
                <p>开心农家乐家庭游玩</p>
                <div class="icon">
                    <img src="" alt="">
                    <img src="" alt="">    
                </div>
            </div>
            <div class="score">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <span>4.2分</span>
            </div>
            <div class="site">
                <img src="" alt="" class="one">
                <p>怀柔怀柔区长源村2号绿道双道廊桥驿站前进50米</p>
                <img src="" alt="" class="two">
            </div>
            
        </div>
        <div class="link">
            <div class="time">
                <div class="item">
                    <div class="label">项目</div>
                    <div class="text">亲子采摘；钓鱼；野炊；儿童乐园等</div>
                </div>
                <div class="item">
                    <div class="label">营业时间</div>
                    <div class="text">周一至周日   09:30-20:00</div>
                </div>
            </div>
            <!-- <mp-cell-group title="带说明的列表项"> -->
           <div class="d-cell">
                <span>庄园地图</span>
            </div>
            <div class="d-cell">
                <span>手机买单，更享优惠</span>
                <button>手机买单</button>
            </div>
             <div class="d-cell">
                <span>农场优选，有你想要</span>
                <button>农场优选</button>
            </div>
            <!-- </mp-cell-group> -->
        </div>
        <mp-navbar
            v-model="activeIndex"
            :columns="columns" 
           
            >          
             <div
                v-for="(item, index) in columns"
                v-if="activeIndex  === index"
                class="weui-tab__content"
                :key="index"
            >
                {{item}}的内容
             </div>
        </mp-navbar>

    </div>
</template>
<script>
    import MpBadge from 'mp-weui/packages/badge'
    // import MpCell from 'mp-weui/packages/cell'
    // import mpCellGroup from 'mp-weui/packages/cell-group';
    import MpNavbar from 'mp-weui/packages/navbar'
    import mpNavbarPanel from 'mp-weui/packages/navbar-panel';

    export default{
        data (){
            return{
                activeIndex:0,
                columns:['资讯','活动','点评']
            }
        },
        components:{MpBadge,  MpNavbar, mpNavbarPanel}
    }
</script>
<style lang="less">
    .details{
        .swiper{
            height: 440rpx;
            image{
                width: 100%;
                height: 440rpx;
            }
        }
        .main{
            padding: 22rpx 26rpx;
            .name{
                display: flex;
                justify-content: space-between;
                font-size: 30rpx;

                .icon{
                    display: flex;
                    img{
                        width: 38rpx;
                        height: 44rpx;
                    }
                }

            }
            .score{
                display: flex;
                align-items: center;
                margin-top: 23rpx;
                img{
                    width: 26rpx;
                    height: 26rpx;
                }
                span{
                    color: #f11010;
                    font-size: 24rpx;
                }
            }
            .site{
                display: flex;
                font-size: 24rpx;
                color: #888888;
                align-items: center;
                justify-content: space-between;
                margin-top: 23rpx;
                .one{
                    width: 23rpx;
                    height: 28rpx;
                }
                p{
                    flex: 1;
                }
                .two{
                    width: 36rpx;
                    height: 40rpx;
                }
            }
        }
        .link{
            padding-left: 27rpx;
            border-bottom: 1px solid #dbdbdb;
            .time{
                .item{
                    display: flex;
                    padding: 23rpx 0 23rpx 0;
                    
                    .label{
                        font-size: 26rpx;
                        color: #888888;
                        line-height: 30rpx;
                        width: 135rpx;
                    }
                    .text{
                        font-size: 28rpx;
                        line-height: 30rpx;
                    }
                }
            }
            .d-cell{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #dbdbdb;
                padding-right: 17rpx;
                span{
                    font-size: 28rpx;
                    line-height: 108rpx;
                }
                button{
                    width: 153rpx;
                    height: 55rpx;
                    border-radius: 8px;
                    background-color: #39b27d;
                    color: #fff;
                    font-size: 28rpx;
                    line-height: 55rpx;
                    padding: 0;
                    margin: 0;
                }
            }
        }
        .weui-tab{
            .weui-navbar__slider{
                background-color: #39b27d;
                width: 90px;
                // left: 0 !important;
            }
        }

    }
  
</style>
