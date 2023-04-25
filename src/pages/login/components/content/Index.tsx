import React, {useEffect, useReducer} from "react";
import {View} from "@tarojs/components";
import {AtButton, AtInput} from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const initialForm: LOGIN.FormType = {username: '', password: ''};
const reducer = (state: LOGIN.FormType, action: LOGIN.ActionType) => {
  switch (action.type) {
    case 'username': {
      return {
        ...state,
        username: action.nextUsername,
      };
    }
    case 'password': {
      return {
        ...state,
        password: action.nextPassword
      };
    }
    case 'reset': {
      return initialForm;
    }
  }
  throw Error('Unknown action: ' + action.type);
}
const Index: React.FC = () => {
  useEffect(() => {
    Taro.login().then(res => {
      console.log(res)
    })
  }, []);
  const [state, dispatch] = useReducer(reducer, initialForm);
  const handleUsernameChange = (username?: string | number) => {
    dispatch({nextUsername: username as string, type: 'username'})
  }
  const handlePasswordChange = (password?: string | number) => {
    dispatch({nextPassword: password as string, type: 'password'})
  }

  const handleSubmit = () => {

  }
  return (
    <View className='form'>
      <View className='at-row at-row__justify--center'>
        <AtInput
          autoFocus
          className='login_input'
          name='username'
          type='text'
          placeholder='Username'
          value={state.username}
          onChange={handleUsernameChange}
        />
      </View>
      <View className='at-row at-row__justify--center'>
        <AtInput
          autoFocus
          className='login_input'
          name='password'
          type='password'
          placeholder='Password'
          value={state.password}
          onChange={handlePasswordChange}
        />
      </View>
      <View className='at-row at-row__justify--center'>
        <AtButton
          className='login_submit'
          size='small' onClick={handleSubmit}
        >Login</AtButton>
      </View>
    </View>
  );
};

export default Index;
