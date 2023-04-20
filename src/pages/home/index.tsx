import { View} from '@tarojs/components';
import React, {useEffect} from 'react';


const Index: React.FC = () => {

  useEffect(() => {
    console.log('home');
  }, []);
  return (
    <View>
home
    </View>
  );
};

export default Index;
