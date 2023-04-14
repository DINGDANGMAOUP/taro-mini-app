import {View} from '@tarojs/components';
import React, {useMemo} from 'react';
import Taro, { useDidShow } from '@tarojs/taro'

const Index: React.FC = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page)
    // @ts-ignore
    tabbar?.setSelected(3)
  })

  return (
    <View>
      home
    </View>
  );
};

export default Index;
