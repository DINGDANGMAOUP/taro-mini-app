import { View} from '@tarojs/components';
import React, {useEffect} from 'react';
import {AtButton} from "taro-ui";
import {useStores} from "@/store";


const Index: React.FC = () => {
  const {tabBarStore} = useStores();
  useEffect(() => {
    console.log('home');
  }, []);
  return (
    <View>
home
      <AtButton type='primary' onClick={()=>{
        tabBarStore.setLoading(!tabBarStore.loading)
      }
      }
      >按钮文案</AtButton>
    </View>
  );
};

export default Index;
