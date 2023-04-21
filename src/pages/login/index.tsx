import {observer} from 'mobx-react'
import {View} from '@tarojs/components'

import {AtButton, AtForm, AtInput} from "taro-ui";
import React, {useState} from "react";
import './index.scss'


const Index: React.FC = () => {

  const [form, setForm] = useState<FormType>({username: '', password: ''});

  const handleChange = (action: actionType, v: string) => {
    console.log(action, v)
    switch (action) {
      case 'username':
        setForm({...form, username: v})
        break;
      case 'password':
        setForm({...form, password: v})
        break;
    }
  }
  const onSubmit = () => {
  }
  const onReset = () => {
    setForm({username: '', password: ''})
  }
  return (


    <View className='main'>
      <View className='login'>
        <View className='frame shadow'>
          <View className='hint'>后台管理</View>
          <AtForm
            onSubmit={onSubmit}
            onReset={onReset}
          >
            <AtInput
              className='form-group'
              name='username'
              title='用户名'
              type='text'
              placeholder='用户名'
              value={form.username}
              onChange={v => handleChange('username', v as string)}
            />
            <AtInput
              className='form-group'
              name='password'
              title='密码'
              type='password'
              placeholder='密码不能少于10位数'
              value={form.password}
              onChange={v => handleChange('password', v as string)}
            />
            <AtButton className='bottom' circle type='primary' formType='submit' size='small'>提交</AtButton>
            <AtButton className='reset' circle type='secondary' formType='reset' size='small'>重置</AtButton>
          </AtForm>
        </View>
      </View>
    </View>
  );
};

export default observer(Index)
