export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/home/index',
      text: '首页',
      iconPath:"pages/home/home.png",
      selectedIconPath:"pages/home/home.png",
    },
      {
        pagePath: 'pages/index/index',
        text: '首页1',
        iconPath:"pages/home/home.png",
        selectedIconPath:"pages/home/home.png",
      },

    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
})
