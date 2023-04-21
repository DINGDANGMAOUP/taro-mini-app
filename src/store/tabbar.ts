import {observable} from 'mobx'
import Taro from "@tarojs/taro";
import Api from "@/api";

interface tabBarStoreType {
  loading: boolean,
  current: number,
  appTabBar: Array<{ title: string, iconPrefixClass?: string, iconType?: string, url: string }>,
  tabBarList: Array<API_TYPE.TabBar>,
  init(): void,
  setCurrent(index: number): void
  setLoading(loading: boolean): void
}

const tabBarStore = observable<tabBarStoreType>({
  loading: true,
  current: 0,
  appTabBar: [],
  tabBarList: [
  ],
  //获取tabBar配置
  * init() {
    const {success,errMessage,data}= yield Api.getTabBarList();
    if (success){
      this.tabBarList= data;
      this.setLoading(false)
    }else {
      Taro.showToast({title:errMessage,icon:'none'})
    }
  },
  setCurrent(index: number) {
    this.current = index;
    const {url} = this.tabBarList[index];
    Taro.switchTab({url})
  },
  setLoading(loading: boolean) {
    this.loading = loading
  }
})

export default tabBarStore
