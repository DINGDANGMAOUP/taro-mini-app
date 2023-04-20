import {observer} from 'mobx-react'
import {View} from '@tarojs/components'
import {useEffect} from "react";

import Taro from "@tarojs/taro";
import './index.scss'


const Index = () => {
  useEffect(() => {
    setTimeout(()=>{
      Taro.switchTab({
        url: '/pages/home/index'
      })
    },10000)
  }, []);
  return (
    <View className='index'>
      loading
    </View>
  );
};


export default observer(Index)
