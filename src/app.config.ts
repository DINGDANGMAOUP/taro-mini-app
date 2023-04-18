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
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home_select.png",
      },
      {
        pagePath: 'pages/notice/index',
        text: '消息',
        iconPath: "assets/tabbar/user.png",
        selectedIconPath: "assets/tabbar/user_select.png",
      },
      {
        pagePath: 'pages/user/index',
        text: '用户',
        iconPath: "assets/tabbar/user.png",
        selectedIconPath: "assets/tabbar/user_select.png",
      },
    ],
  },
})


