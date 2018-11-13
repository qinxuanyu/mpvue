<template>
    <div class="add-site">
        <ul>
            <li>
                <label>联系人</label>
                <input type="text" placeholder="名字">
            </li>
            <li>
                <label>手机号</label>
                <input type="text" placeholder="11位手机号">
            </li>
            <li>
                <label>地区</label>
                <picker mode="region" @change="bindRegionChange" :value="region">
                    <view class="picker">
                        {{region[0]}}，{{region[1]}}，{{region[2]}}
                    </view>
                </picker>
            </li>
            <li>
                <label>详细地址</label>
                <input type="text" placeholder="街道门牌信息">
            </li>
            <li>
                <label>邮政编码</label>
                <input type="text" placeholder="邮政编码">
            </li>
        </ul>
        <button class="submit-btn-bottom">提交</button>
    </div>
</template>
<script>
    export default {
        data (){
            return{
                region: ["北京市", "北京市", "东城区"],
            }
        },
        methods:{
            bindRegionChange (e){
                // console.log(e);
                this.region = e.mp.detail.value
            }
        }
    }
</script>
<style lang="less" scoped>
    .add-site{
        min-height: 100vh;
        background-color: #f3f3f3;
        ul{
            background-color: #fff;
            li{
                display: flex;
                font-size: 28rpx;
                padding: 37rpx;
                align-items: center;
                border-bottom: 1px solid #f5f5f5;
                label{
                    flex: 1;
                }
                input{
                    flex: 3;
                }
                picker{
                    flex: 3;
                    // height: 1.4rem;
                }
            }
        }
    }
</style>
