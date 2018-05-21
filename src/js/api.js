// function request(url,method,postData,doSuccess,doFail,doComplete){
//    wx.request({
//     url: url,
//     data:postData,
//     method: method,
//     success: function(res){
//         console.log(res)
//      if(res.statusCode == 200){
//          if(res.data.result){
//             if(typeof doSuccess == "function"){
//                 doSuccess(res);
//             }
//          }else{
//             wx.showToast({
//                 title: res.data.msg || "服务器内部错误",
//                 icon: 'cancel',
//                 duration: 2000
//             })
//          }
       
//      }else if(res.statusCode == 500){
//         wx.showToast({
//             title: res.data.msg || "服务器内部错误",
//             icon: 'cancel',
//             duration: 2000
//         })
//      }
    
//     },
//     fail: function(fail) {
//         console.log('fail'+fail)
//         if(typeof doFail == "function"){
//         doFail();
//         }
//     },
//     complete: function(complete) {
//         if(typeof doComplete == "function"){
//         doComplete();
//         console.log('complete'+complete)
//         }
//     }
//    });
//  }
//  module.exports.request = request;
function request(data){
    return new Promise(function(reslove,reject){
       //网络请求
       wx.request({
         url: data.url,
         data: data.data,
         method: data.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         header: {
             'Content-Type': 'application/json;charset=UTF-8'
         }, // 设置请求的 header
         success: function(res){
           // success网络请求成功
           if(res.statusCode!=200){
                reject({error:res.data.msg,code:res.statusCode});
                wx.showToast({
                    title: res.data.msg || "服务器内部错误",
                    icon: 'cancel',
                    duration: 2000
                })
               return;
           }
           reslove(res.data.data);
         },
         fail: function(res) {
           // fail调用接口失败
           reject({error:'网络错误',code:0,res});
           wx.showToast({
                title:"网络错误",
                icon: 'cancel',
                duration: 2000
            })
         },
         complete: function(res) {
           // complete
         }
       })
    })
 }

 //接口调用
 export default {
     //登录
     login:function(data){
         return request({
             url:'http://www.178by.com/api/dctp-cloud-user/help/nofilter/helpDocList',
             method:'get',
             data:data
        });
     }
 }