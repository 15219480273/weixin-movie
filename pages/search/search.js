// 引入外部js
var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    movies:[],
    hidden:true,
    modalHidden: true,
    //模拟搜索结果
    AllSearchData: { "count": 20, "start": 0, "total": 3, "subjects": [{ "rating": { "max": 10, "average": 6.7, "stars": "35", "min": 0 }, "genres": ["\u559c\u5267", "\u97f3\u4e50"], "title": "\u7f1d\u7eab\u673a\u4e50\u961f", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1324043\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp" }, "name": "\u5927\u9e4f", "id": "1324043" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1316368\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp" }, "name": "\u4e54\u6749", "id": "1316368" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1315729\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp" }, "name": "\u53e4\u529b\u5a1c\u624e", "id": "1315729" }], "collect_count": 176724, "original_title": "\u7f1d\u7eab\u673a\u4e50\u961f", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1324043\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp" }, "name": "\u5927\u9e4f", "id": "1324043" }], "year": "2017", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/26926321\/", "id": "26926321" }, { "rating": { "max": 10, "average": 0, "stars": "00", "min": 0 }, "genres": ["\u5947\u5e7b", "\u77ed\u7247", "\u9ed1\u8272\u7535\u5f71"], "title": "\u4eba\u00b7\u6811\u00b7\u7f1d\u7eab\u673a", "casts": [{ "alt": null, "avatars": null, "name": "\u827e\u6d77\u6d0b", "id": null }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1333353\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377512144.86.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377512144.86.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1377512144.86.webp" }, "name": "\u738b\u52c7", "id": "1333353" }], "collect_count": 9, "original_title": "\u4eba\u00b7\u6811\u00b7\u7f1d\u7eab\u673a", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1374982\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528194547.2.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528194547.2.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1528194547.2.webp" }, "name": "\u95eb\u9e4f\u5b87", "id": "1374982" }], "year": "2012", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2174780015.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2174780015.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2174780015.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/25848287\/", "id": "25848287" }, { "rating": { "max": 10, "average": 0, "stars": "00", "min": 0 }, "genres": [], "title": "\u75af\u4eba\u8ba1\u5212", "casts": [{ "alt": null, "avatars": null, "name": "\u8427\u6c38\u88d5", "id": null }, { "alt": null, "avatars": null, "name": "\u738b\u81ea\u5f3a", "id": null }, { "alt": null, "avatars": null, "name": "\u9976\u661f\u661f", "id": null }], "collect_count": 10, "original_title": "\u75af\u4eba\u8ba1\u5212", "subtype": "movie", "directors": [{ "alt": null, "avatars": null, "name": "\u9648\u51a0\u9890", "id": null }, { "alt": null, "avatars": null, "name": "\u5f20\u8015\u95fb", "id": null }], "year": "2017", "images": { "small": "https://img1.doubanio.com\/f\/movie\/b6dc761f5e4cf04032faa969826986efbecd54bb\/pics\/movie\/movie_default_small.png", "large": "https://img3.doubanio.com\/f\/movie\/30c6263b6db26d055cbbe73fe653e29014142ea3\/pics\/movie\/movie_default_large.png", "medium": "https://img1.doubanio.com\/f\/movie\/5081e011b4b06f1a8c3735122b38e781bd852ab6\/pics\/movie\/movie_default_medium.png" }, "alt": "https:\/\/movie.douban.com\/subject\/27160818\/", "id": "27160818" }], "title": "\u641c\u7d22 \"\u7f1d\u7eab\u673a\" \u7684\u7ed3\u679c" }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  bindKeyInput: function  (e)  {
    this.setData({inputVal:e.detail.value});
  },
  search: function () {
    if(this.data.inputVal==""){
      this.setData({ modalHidden : false});
      return false;
    }
    this.setData({hidden : false});
    var page = this;
    var subjects = page.data.AllSearchData.subjects;
    subjectUtil.processSubjects(subjects);
    page.setData({ movies: subjects, hidden: true });
  //   wx.request({
  //     url: 'https://api.douban.com/v2/movie/search?q='+page.data.inputVal, 
  //     header: {
  //       'content-type': 'application/json' 
  //     },
  //     success: function (res) {
  //       var subjects = res.data.subjects;
  //       subjectUtil.processSubjects(subjects);
  //       page.setData({movies:subjects,hidden:true});
  //     }
  //   })
  },
  hideModal: function(){
    this.setData({ modalHidden : true});
  },
  detail: function (e) {
    getApp().detail(e);
  }
})