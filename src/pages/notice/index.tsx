import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useStores } from '@/store';
import { AtButton } from 'taro-ui';

import './index.scss'





const Index = () => {
const{counterStore}= useStores()
const  increment = () => {
    counterStore.increment()
  }

  const  decrement = () => {
    counterStore.decrement()
  }

  const  incrementAsync = () => {
    counterStore.incrementAsync()
  }
  return (
    <View className='index'>
    <AtButton type='primary' onClick={increment}>+</AtButton>
    <AtButton type='secondary' onClick={decrement}>-</AtButton>
    <AtButton onClick={incrementAsync}>Add Async</AtButton>
    <Text>{counterStore.counter}</Text>
  </View>
  );
};



export default observer(Index)
