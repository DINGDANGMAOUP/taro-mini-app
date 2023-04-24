import {observer} from 'mobx-react'
import {View} from '@tarojs/components'
import React, {useEffect, useReducer} from "react";
import Taro from "@tarojs/taro";
import Title from "@/pages/login/components/title";
import LoginForm from "@/pages/login/components/form";
import './index.scss'


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
  // const [form, setForm] = useState<FormType>({username: '', password: ''});

  const [state, dispatch] = useReducer(reducer, initialForm);
  const handleUsernameChange = (username?: string|number) => {
    dispatch({nextUsername: username as string, type: 'username'})
  }
  const handlePasswordChange = (password?: string|number) => {
    dispatch({nextPassword: password as string, type: 'password'})
  }

  const handleSubmit = () => {

  }

  // const wxLogin = async () => {
  //   const info = await Taro.getUserProfile({
  //     desc: '登入使用',
  //   })
  //   console.log(info)
  //   const {errMsg} = info
  //   if (errMsg === 'getUserProfile:ok') {
  //     Taro.switchTab({url: '/pages/home/index'})
  //   }
  // }
  return (
    <View className='main_container'>
      <View className='at-row at-row__align--end at-row__justify--center login_title'>
        <Title />
      </View>
      <View className='at-row at-row__justify--center login_form'>
        <LoginForm />
      </View>
      <View className='at-row at-row__align--center at-row__justify--center login_bottom'>
        create
      </View>
      {/*<View*/}
      {/*  className='login_form'*/}
      {/*>*/}

        {/*<AtInput*/}
        {/*  autoFocus*/}
        {/*  className='login_input'*/}
        {/*  name='username'*/}
        {/*  type='text'*/}
        {/*  placeholder='Username'*/}
        {/*  value={state.username}*/}
        {/*  onChange={handleUsernameChange}*/}
        {/*/>*/}
        {/*<AtInput*/}
        {/*  autoFocus*/}
        {/*  className='login_input'*/}
        {/*  name='password'*/}
        {/*  type='password'*/}
        {/*  placeholder='Password'*/}
        {/*  value={state.password}*/}
        {/*  onChange={handlePasswordChange}*/}
        {/*/>*/}
        {/*<AtButton*/}
        {/*  className='login_submit'*/}
        {/*  size='small' onClick={handleSubmit}*/}
        {/*>Login</AtButton>*/}
      {/*</View>*/}
    </View>
  );
};

export default observer(Index)
