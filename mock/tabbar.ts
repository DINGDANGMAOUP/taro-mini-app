///api/tabbar

export default {
  'GET /api/getTabBar': {
    success: true,
    data: [
      {title: '首页', iconType: 'home', url: '/pages/home/index'},
      {title: '消息', iconType: 'bell', text: '99', max: 99, url: '/pages/notice/index'},
      {title: '我', iconType: 'user', url: '/pages/user/index'}
    ],
    errMessage: '',
    errCode: 200,
  },
}
