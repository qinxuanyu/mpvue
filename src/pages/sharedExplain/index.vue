<template>
    <div class="shared-explain">
        <p class="title">分享收益说明</p>
        <p>分享小程序、自然课堂资讯给其他用户即可获得积分，
            每天操作上限5次，每次可获得8积分。</p>
        <p>
            分享庄园二维码给其他用户，其他用户消费即可获取
            积分，获取积分为消费金额的五分之一，例如其他用
            户消费100元，则本人可获得20积分。
        </p>
        <p>
            获得积分的记录可在分享活动中或积分区积分明细中
            查看，可在积分区兑换积分商品
        </p>
    </div>
</template>
<script>
    export default {
        data (){

        }
    }
</script>
<style lang="less" scoped>
    .shared-explain{
        padding: 35rpx;
        .title{
            padding-left: 20rpx;
            border-left: 5rpx solid #39b27d;
            color: #39b27d;
            margin-bottom: 35rpx;
        }
        p{
            font-size:28rpx;
            margin-bottom: 50rpx;
        }
    }
</style>
