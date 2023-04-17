import {observable} from 'mobx'
import Taro from "@tarojs/taro";

interface tabBarStoreType {
  current: number,
  tarBarList: Array<{ title: string, iconType: string, url: string, text?: string, max?: number }>,

  setCurrent(index: number): void
}

const tabBarStore = observable<tabBarStoreType>({
  current: 0,
  tarBarList: [
    {title: '首页', iconType: 'home', url: '/pages/home/index'},
    {title: '消息', iconType: 'bell', text: '99', max: 99, url: '/pages/index/index'},
    {title: '我', iconType: 'user', url: '/pages/user/index'}
  ],
  setCurrent(index: number) {
    this.current = index;
    const {url} = this.tarBarList[index];
    Taro.switchTab({url})
  }
})

export default tabBarStore
