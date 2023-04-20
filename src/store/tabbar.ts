import {observable} from 'mobx'
import Taro from "@tarojs/taro";
import Api from "@/api";

interface tabBarStoreType {
  current: number,
  appTabBar: Array<{ title: string, iconPrefixClass?: string, iconType?: string, url: string }>,
  tabBarList: Array<{ title: string, iconType: string, url: string, text?: string, max?: number }>,
  init(): void,
  setCurrent(index: number): void
}

const tabBarStore = observable<tabBarStoreType>({
  current: 0,
  appTabBar: [],
  tabBarList: [
    {title: '首页', iconType: 'home', url: '/pages/home/index'},
    {title: '消息', iconType: 'bell', text: '99', max: 99, url: '/pages/notice/index'},
    {title: '我', iconType: 'user', url: '/pages/user/index'}
  ],
  //获取tabBar配置
  * init() {
  const  res= yield Api.isTest('/api/upload', {})
    console.log(res)
  },
  setCurrent(index: number) {
    this.current = index;
    const {url} = this.tabBarList[index];
    Taro.switchTab({url})
  }
})

export default tabBarStore
