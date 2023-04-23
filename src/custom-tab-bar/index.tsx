import {useStores} from "@/store";
import {AtTabBar} from "taro-ui";
import {observer} from 'mobx-react'
import {useLayoutEffect} from "react";

import './index.scss'


const Index = () => {
  const {tabBarStore} = useStores();
  const {tabBarList, current, loading} = tabBarStore;

  useLayoutEffect (() => {
    tabBarStore.init();
  },[]);
  const switchTab = (idx: number) => {
    tabBarStore.setCurrent(idx)
  }
  return (
    <>
      {loading ? <></> :
        <AtTabBar
          fixed
          tabList={tabBarList}
          onClick={switchTab}
          current={current}
        />
      }
    </>

  );
};
//解除样式隔离
Index.options = {
  addGlobalClass: true
}
export default observer(Index);
