<template>
    <div class="search">
        <mp-search
            @confirm="onSearchConfirm"
            @change="onSearchChange"
            />
        <div class="line"></div>
        <div class="history">
            <div class="title">
                <span>最近搜索</span>
                <span @click.stop="clearStorage">清除</span>
            </div>
            <ul class="list">
                <li v-for="(item,index) in searchList" :key="index">{{item}}</li>
               
            </ul>
        </div>
        
    </div>
</template>
<script>
    import MpSearch from 'mp-weui/packages/search'
    export default{
        data (){
            return{
                searchList:[]
            }
        },
        components:{MpSearch},
        methods:{
            onSearchConfirm (value){
                // console.log(value);
                if(value){
                    let list = this.getSearchList();
                    list.unshift(value)
                    wx.setStorageSync('searchList',list);
                    this.searchList = this.getSearchList()
                }else{
                    wx.showToast({
                        title: '请输入搜索的内容',
                        icon: 'none',
                    })
                }
                
            },
            onSearchChange (value){
                
            },
            getSearchList (){
                let data = wx.getStorageSync('searchList');
                if(data){
                    return data
                }else{
                    return []
                }
            },
            clearStorage (){
                wx.removeStorageSync('searchList');
                this.searchList = this.getSearchList()
            }
        },
        created() {
            this.searchList = this.getSearchList()
        },
    }
</script>
<style lang="less" >
    .search{
        .weui-search-bar{
            background-color: #fff;
            border: 0;
        }
        .line{
            height:18rpx;
            background-color: #f3f3f3;
        }
        .history{
            padding: 33rpx;
            .title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                span:nth-child(1){
                    font-size: 30rpx;
                    color: #2f2f2f;
                }
                span:nth-child(2){
                    font-size: 26rpx;
                    color: #777777;
                }
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                li{
                    font-size: 28rpx;
                    color: #777777;
                    padding: 18rpx 40rpx;
                    border-radius: 5px;
                    background-color: #f2f2f2;
                    margin: 8rpx 11rpx;
                }
            }
        }
        
    }
    
</style>
