<template>
    <div class="manor-info">
        <ul class="info">
            <li>
                <span>周边交通</span>
                <p>G12高速；316国道</p>
            </li>
            <li>
                <span>经营项目</span>
                <p>亲子采摘；钓鱼；野炊；棋牌；儿童乐园</p>
            </li>
            <li>
                <span>经营时间</span>
                <p>周一至周日  09:30-20:00</p>
            </li>
            <li>
                <span>基础设施</span>
                <p>免费停车；免费WIFI</p>
            </li>
        </ul>
        <div class="nc-line"></div>
        <div class="nodes"></div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    .manor-info{
        .info{
            li{
                display: flex;
                font-size: 28rpx;
                line-height: 90rpx;
                border-top: 1px solid #f5f5f5;
                padding: 0 40rpx;
                span{
                    color: #949494;
                    padding-right: 74rpx;
                }
            }
        }
        .nodes{
            padding: 20epx;
        }
    }
</style>

