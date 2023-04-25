import {observable} from 'mobx'
// import Taro from "@tarojs/taro";
import Api from "@/api";
import Taro from "@tarojs/taro";

interface userStoreType {
  loading: boolean,
  username?: string,
  token?: string,
  login(username, password): void,
  setLoading(loading: boolean): void
}

const userStore = observable<userStoreType>({
  loading: false,
  * login(username, password) {
    console.log(username, password)
    const res = yield Api.login({username, password})
    const {success, errMessage, data} = res;
    console.log(res)
    if (success) {
      this.token = data;
      this.setLoading(false)
      Taro.showToast({title: '登录成功', icon: 'success'})
      setTimeout(()=>{
        Taro.switchTab({url: '/pages/home/index'})
      },500)
    }
    console.log(errMessage);
  },
  setLoading(loading: boolean) {
    this.loading = loading
  }
})

export default userStore
