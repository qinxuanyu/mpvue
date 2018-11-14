<script>
import 'mp-weui/lib/style.css';
export default {
   beforeCreate(){
      wx.showNavigationBarLoading()
   },
    created () {
       // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        wx.hideNavigationBarLoading()
        console.log('app created and cache logs by setStorageSync')
    },
   
}
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.clearfix:after {
   content:""; 
   display: block; 
   clear:both; 
}
.weui-cell{
  font-size: 28rpx;
  color: #2f2f2f;
  .weui-cell__bd {
     padding-left: 50rpx;
  }
}
.nc-line{
   	height:18rpx;
	background-color: #f3f3f3;
}
.submit-btn-bottom{
  width: 660rpx;
  height: 77rpx;
  margin-top: 65rpx;
  background-color: #39b27d;
  color: #fff;
  font-size: 32rpx;
  line-height: 77rpx;
}
.weui-navbar{
   border:0;
   .weui-navbar__slider{
      background-color: #39b27d;
   }
}
view{
	color: #212121;
}
</style>
