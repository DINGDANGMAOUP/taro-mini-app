import React from 'react';
import {OpenData, View} from "@tarojs/components";
import {AtAvatar} from "taro-ui";


import './index.scss';

const Index:React.FC = () => {
  return (
      <View className='at-row'>
        <View className='at-col at-col-3'>
          <AtAvatar circle openData={{type: 'userAvatarUrl'}}></AtAvatar>
        </View>
        <View className='at-col at-col-3'>
          <OpenData type='userNickName' />
        </View>
      </View>
  );
};

export default Index;
