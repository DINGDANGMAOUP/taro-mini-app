
import {AtTabBar} from "taro-ui";
import {useStores} from "@/store";
import { observer } from 'mobx-react'
import './index.scss'




const Index = () => {
  const {tabBarStore} = useStores();
  const {tarBarList,current} = tabBarStore;
 const switchTab =(idx: number)=> {
   tabBarStore.setCurrent(idx)
  }

  return (
    <AtTabBar
      fixed
      tabList={tarBarList}
      onClick={switchTab}
      current={current}
    />
  );
};
//解除样式隔离
Index.options={
  addGlobalClass: true
}
export default observer(Index);
