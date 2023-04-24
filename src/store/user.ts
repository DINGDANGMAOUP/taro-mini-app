import {observable} from 'mobx'
// import Taro from "@tarojs/taro";
// import Api from "@/api";

interface userStoreType {
  loading: boolean,
  username?: string,
  login({username,password}): void,
}

const userStore = observable<userStoreType>({
  loading: true,
  * login({username,password}) {
    console.log(username);
    console.log(password);
  }
})

export default userStore
