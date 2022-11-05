const baseUrl = 'https://xin-music-16685-5-1302532828.sh.run.tcloudbase.com'


export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })
  return new  Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + uri,
      method: "GET",
      success:(res)=>{
        // handleHttpError(res,reject)
        // 
        // if(res.statusCode !== 200){
        //   console.log(res)
        //   reject("请求异常")
        // }
        resolve(res.data)
      },
      fail:reject,
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}
// const handleHttpError=(response,reject)=>{
//   if(response.statusCode !==200){
//    return reject("请求异常")
//   }
// }