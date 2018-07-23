// 引入外部js
var subjectUtil = require('../../utils/subjectUtil.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{},
    detailData: { "rating": { "max": 10, "average": 6.7, "stars": "35", "min": 0 }, "reviews_count": 2076, "wish_count": 9903, "douban_site": "", "year": "2017", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2498558511.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/26926321\/", "id": "26926321", "mobile_url": "https:\/\/movie.douban.com\/subject\/26926321\/mobile", "title": "\u7f1d\u7eab\u673a\u4e50\u961f", "do_count": null, "share_url": "https:\/\/m.douban.com\/movie\/subject\/26926321", "seasons_count": null, "schedule_url": "", "episodes_count": null, "countries": ["\u4e2d\u56fd\u5927\u9646"], "genres": ["\u559c\u5267", "\u97f3\u4e50"], "collect_count": 176749, "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1324043\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp" }, "name": "\u5927\u9e4f", "id": "1324043" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1316368\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473410979.5.webp" }, "name": "\u4e54\u6749", "id": "1316368" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1315729\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1441515551.6.webp" }, "name": "\u53e4\u529b\u5a1c\u624e", "id": "1315729" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1352153\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1506664202.44.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1506664202.44.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1506664202.44.webp" }, "name": "\u674e\u9e3f\u5176", "id": "1352153" }], "current_season": null, "original_title": "\u7f1d\u7eab\u673a\u4e50\u961f", "summary": "\u300a\u7f1d\u7eab\u673a\u4e50\u961f\u300b\u662f\u5927\u9e4f\u7684\u7b2c\u4e8c\u90e8\u5bfc\u6f14\u4f5c\u54c1\uff0c\u5ef6\u7eed\u4e86\u5c0f\u4eba\u7269\u9010\u68a6\u7684\u6545\u4e8b\uff0c\u8bb2\u8ff0\u4e86\u4e00\u7fa4\u6709\u8da3\u7684\u6447\u6eda\u7231\u597d\u8005\u5e2e\u5c0f\u9547\u96c6\u5b89\u91cd\u62fe\u97f3\u4e50\u68a6\u60f3\u7684\u6545\u4e8b\u3002\n\u5c0f\u9547\u9752\u5e74\u80e1\u4eae\uff08\u4e54\u6749 \u9970\uff09\u4e3a\u5b88\u62a4\u5bb6\u4e61\u6447\u6eda\u516c\u56ed\uff0c\u9ad8\u85aa\u8bf7\u6765\u97f3\u4e50\u7ecf\u7eaa\u4eba\u7a0b\u5bab\uff08\u8463\u6210\u9e4f \u9970\uff09\u7b79\u529e\u6f14\u5531\u4f1a\u3002\u6700\u540e\u96c6\u5408\u4e86\u9f13\u624b-\u70b8\u836f\uff08\u674e\u9e3f\u5176 \u9970\uff09\uff0c\u8d1d\u65af\u624b-\u4e01\u5efa\u56fd\uff08\u5a1c\u624e \u9970\uff09\uff0c\u5409\u4ed6\u624b-\u6768\u53cc\u6811\uff08\u97e9\u7ae5\u751f \u9970\uff09\uff0c\u952e\u76d8\u624b-\u5e0c\u5e0c\uff08\u66f2\u96bd\u5e0c \u9970\uff09\u7ec4\u5efa\u4e86\u201c\u7f1d\u7eab\u673a\u4e50\u961f\u201d\uff0c\u6f14\u51fa\u7b79\u5907\u4e4b\u9645\uff0c\u5f53\u5730\u623f\u5730\u4ea7\u5927\u4ea8\u4e3a\u5c3d\u5feb\u62c6\u9664\u516c\u56ed\uff0c\u8868\u793a\u613f\u51fa\u9ad8\u4ef7\u8feb\u4f7f\u7a0b\u5bab\u53d6\u6d88\u6f14\u51fa\u3002\u9762\u5bf9\u9ad8\u989d\u8bf1\u60d1\u548c\u97f3\u4e50\u68a6\u60f3\uff0c\u7a0b\u5bab\u8be5\u4f55\u53bb\u4f55\u4ece\uff1f\u6447\u6eda\u5c0f\u9547\u96c6\u5b89\u7684\u6447\u6eda\u516c\u56ed\u80fd\u5426\u4fdd\u5168\uff0c\u96c6\u5b89\u4eba\u7684\u6447\u6eda\u68a6\u60f3\u53c8\u5c06\u4f55\u53bb\u4f55\u4ece\u5462\u2026\u2026", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1324043\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1490342249.11.webp" }, "name": "\u5927\u9e4f", "id": "1324043" }], "comments_count": 62643, "ratings_count": 166547, "aka": ["City of Rock"] }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie(options);
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
  loadMovie: function (movieId){
    var page = this;
    //var movieId = wx.getStorageSync('movieId');
    var subjects = page.data.detailData;
    subjectUtil.processSubject(subjects);
    page.setData({ movies: subjects, hidden: true });
  //   wx.request({
  //     url: 'https://api.douban.com/v2/movie/subject/'+movieId,
  //     header: {
  //       'content-type': 'application/json' 
  //     },
  //     success: function (res) {
  //       var subjects = res.data.subjects;
  //       subjectUtil.processSubjects(subjects);
  //       page.setData({detailData:subjects,hidden:true});
  //     }
  //   })
  }
})