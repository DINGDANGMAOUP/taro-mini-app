import {observer} from 'mobx-react'
import {View} from '@tarojs/components'
import React from "react";
import Header from "@/pages/login/components/header";
import Content from "@/pages/login/components/content";
import Footer from "@/pages/login/components/footer";
import './index.scss'


const Index: React.FC = () => {

  return (
    <View className='main_container'>
      <View className='at-row at-row__align--end at-row__justify--center login_header'>
        <Header />
      </View>
      <View className='at-row at-row__justify--center login_content'>
        <Content />
      </View>
      <View className='at-row at-row__align--center at-row__justify--center login_footer'>
        <Footer />
      </View>
    </View>
  );
};

export default observer(Index)
