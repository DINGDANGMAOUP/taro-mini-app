import React from 'react';
import {OpenData, View} from "@tarojs/components";
import {AtAvatar, AtButton} from "taro-ui";


import './index.scss';

const Index:React.FC = () => {
  return (
      <View className='at-row user__profile'>
        <View className='user__profile__avatar at-col at-col-3'>
          <AtAvatar circle openData={{type: 'userAvatarUrl'}}></AtAvatar>
        </View>
        <View className='user__profile__nickname at-col at-col-3'>
          <OpenData type='userNickName' />
        </View>
        <View className='user__profile__button at-col at-col-6'>
            <AtButton circle size='small'>编辑资料</AtButton>
        </View>
      </View>
  );
};

export default Index;
