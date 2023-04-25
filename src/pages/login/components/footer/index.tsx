import React from 'react';
import {View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import './index.scss';

const Index:React.FC = () => {
  return (
    <>
      <View className='at-col at-col-5'>
        Can`t have an account?
      </View>
      <View className='at-col at-col-2 at-col__offset-1'>
        <AtButton className='footer_button' size='small'>Create</AtButton>
      </View>
    </>
  );
};

export default Index;
