import {View} from "@tarojs/components";
import {AtMessage} from 'taro-ui'

export const Index = props => {
  const {children} = props;
  return (
    <View>
      <AtMessage />
      {children}
    </View>
  );
};
