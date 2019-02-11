const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "凉城",
        artist: '任然',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E5%87%89%E5%9F%8E-%E4%BB%BB%E7%84%B6.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E5%87%89%E5%9F%8E-%E4%BB%BB%E7%84%B6.jpg',
      },
      {
        name: '린-Love Story',
        artist: 'LYn',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E1%84%85%E1%85%B5%E1%86%AB-Love%20Story.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E1%84%85%E1%85%B5%E1%86%AB-Love%20Story.jpg',
      },
      {
        name: 'Thank You Very Much',
        artist: 'Margaret',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/Thankyou.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/Thankyou.jpg',
      },
      {
        name: '不知归期的故人',
        artist: '房东的猫',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E4%B8%8D%E7%9F%A5%E5%BD%92%E6%9C%9F%E7%9A%84%E6%95%85%E4%BA%BA.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E4%B8%8D%E7%9F%A5%E5%BD%92%E6%9C%9F%E7%9A%84%E6%95%85%E4%BA%BA.jpg',
      },
      {
        name: 'BINGBIAN(病变)',
        artist: '鞠文娴',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/BINGBIAN%28%E7%97%85%E5%8F%98%29%20-%20%E9%9E%A0%E6%96%87%E5%A8%B4.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/BINGBIAN%28%E7%97%85%E5%8F%98%29%20-%20%E9%9E%A0%E6%96%87%E5%A8%B4.jpg',
      },
      {
        name: '大鱼',
        artist: '周深',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/bigfish.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E5%A4%A7%E9%B1%BC.jpg',
      },
      {
        name: '生活不止眼前的苟且',
        artist: '许巍',
        url: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E7%94%9F%E6%B4%BB%E4%B8%8D%E6%AD%A2%E7%9C%BC%E5%89%8D%E7%9A%84%E8%8B%9F%E4%B8%94.mp3',
        cover: 'http://lishq.oss-cn-beijing.aliyuncs.com/github.io/music/%E7%94%9F%E6%B4%BB%E4%B8%8D%E6%AD%A2%E7%9C%BC%E5%89%8D%E7%9A%84%E8%8B%9F%E4%B8%94.jpg',
      }
    ]
});