import React from "react";
import {View} from "@tarojs/components";
import {AtButton, AtInput} from "taro-ui";
import "./index.scss";

const Index: React.FC = () => {
  return (
    <View className='form'>
      <View className='at-row at-row__justify--center'>
        <AtInput
          autoFocus
          className='login_input'
          name='username'
          type='text'
          placeholder='Username'
          // value={state.username}
          onChange={event => console.log(event)}
        />
      </View>
      <View className='at-row at-row__justify--center'>
        <AtInput
          autoFocus
          className='login_input'
          name='password'
          type='password'
          placeholder='Password'
          // value={state.password}
          onChange={event => console.log(event)}
        />
      </View>
      <View className='at-row at-row__justify--center'>
        <AtButton
          className='login_submit'
          size='small' onClick={event => console.log(event)}
        >Login</AtButton>
      </View>
    </View>
  );
};

export default Index;
