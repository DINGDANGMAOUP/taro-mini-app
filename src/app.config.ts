
export default defineAppConfig({
  pages: [
    'pages/login/index',
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


