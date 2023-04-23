
export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/notice/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: Object.assign({
    iconfont: `components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  }),
  lazyCodeLoading: 'requiredComponents',
  tabBar: {
    custom: true,
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/notice/index',
        text: '消息',
      },
      {
        pagePath: 'pages/user/index',
        text: '用户',
      }
    ],
  },
})


