import React, {useState} from 'react'
import Taro from '@tarojs/taro'
import {CoverView, CoverImage} from '@tarojs/components'

import './index.scss'



const Index: React.FC = () => {
  const [tabbar, setTabbar] = useState({
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home_select.png",
      },
      {
        pagePath: 'pages/user/index',
        text: '用户',
        iconPath: "assets/tabbar/user.png",
        selectedIconPath: "assets/tabbar/user_select.png",
      },
    ]
  });
  const {list, selected, color, selectedColor} = tabbar;


  const switchTab = (index, url) => {
    setSelected(index)
    Taro.switchTab({url})
  }

  const setSelected = (idx: number) => {
    setTabbar({
      ...tabbar,
      selected: idx
    })

  }

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {list.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(index, item.pagePath)}>
            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
            <CoverView style={{color: selected === index ? selectedColor : color}}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  );
};

export default Index;

