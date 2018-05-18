<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" >
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <div class="bottom"><span class="span">span</span>    asdsadsd</div>
    <scroll-view @click="click" scroll-y style="height: 200px;" bindscrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" scroll-into-view="" scroll-top=""  >
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
    </scroll-view>
    <rich-text :nodes="html" @click.stop="richClick"></rich-text>
    <div style="height:100vh">
    <swiper 
       class="swiper" :current="index" @change="change" :skip-hidden-item-layout="true">
      <block v-for="item in imgUrls" :key="item" >
        <swiper-item>
          <image  :src="item" class="slide-image" :width="355" :height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <div>{{index + 1}}/{{imgUrls.length}}</div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import api from "@/js/api"
export default {
  data () {
    return {
      index:1,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      motto: 'Hello World',
      userInfo: {},
      html:'<p>1.测试 测试测试测试测试测试测试测试测试测试测试测试测试 （）<img src="http://14.116.153.17:8085/cdn/4fe19648-1682-4935-b647-e244d5a0b5cd.png" style="max-width: 100%;"></p><p>A.测试测试测试测试测试测试</p><p>B.测试测试测试测试测试测试</p><p>C.测试测试测试测试测试测试</p><p>D.测试测试测试测试测试测试</p><p><br></p>'
    }
  },

  components: {
    card
  },

  methods: {
  
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    lower (){
      console.log(1)
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    scroll (){
      console.log('scroll')
    },
    click (){
      this.index = 0;
      console.log(this.index)
    },
    change (e){
      console.log(e)
       if(e.target.current > this.index){
         console.log('左滑') 
      }
      this.index = e.target.current
      console.log(this.index)
     
    },
    richClick(){
       this.index = 1;
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    // api.login();
    api.login({data:"1",}).then(data =>{
       console.log(data);
    }).catch(error => {
       console.error(error)
    })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
li{
  height: 100px;;
}
.swiper{
  height: 150px;
  width: 100vw;
}
</style>
