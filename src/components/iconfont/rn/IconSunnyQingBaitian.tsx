/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconSunnyQingBaitian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-410 0a410 410 0 1 0 820 0 410 410 0 1 0-820 0Z"
        fill={getIconColor(color, 0, '#262A3C')}
      />
      <Path
        d="M500.6 693c22.6 1.4 45.3-1.6 66.9-8.6L542 752l-41.4-59z m-88.9-29.9c18.8 12.6 39.9 21.4 62 26.2l-55.8 45.6-6.2-71.8z m180.6 11.1C612.7 664 631 650 646.2 633l11.7 71.8-65.6-30.6z m-140.2-20.3c-77.8-32.9-114.2-122.7-81.3-200.5 32.9-77.8 122.7-114.2 200.5-81.3 77.8 32.9 114.2 122.7 81.3 200.5-24 56.6-79.5 93.4-141 93.4-20.5 0-40.7-4.1-59.5-12.1z m-102-60.7c9.8 19.8 23.2 37.6 39.4 52.5l-70.4 12.2 31-64.7zM677.9 583c4.6-10.9 8.1-22.2 10.5-33.8l46.4 56.8-72.7 6.3c6.2-9.2 11.4-19 15.8-29.3zM272 541.9l59.6-40.8c-1.4 22.2 1.2 44.4 7.9 65.6L272 541.9z m410.8-86l69.2 26.2-60.2 42.1c1.4-23.1-1.6-46.4-9-68.3z m-393.6-38l72.6-5.6c-12.5 18.6-21.4 39.3-26.2 61.2l-46.4-55.6zM631.6 378l73.3-11.9-31.3 67.1c-10.4-20.9-24.6-39.7-42-55.2z m-265.5-58.9l66.2 31.7c-20.3 9.9-38.5 23.5-53.7 40.2l-12.5-71.9z m215.7 27.5c-10.5-4.4-21.3-7.8-32.4-10.2l56.6-47.2 5.7 73.5c-9.4-6.3-19.4-11.7-29.9-16.1zM482 272l41.6 60.8c-22.6-1.5-45.4 1.3-67 8.2l25.4-69z"
        fill={getIconColor(color, 1, '#FFDC00')}
      />
    </Svg>
  );
};

IconSunnyQingBaitian.defaultProps = {
  size: 18,
};

IconSunnyQingBaitian = React.memo ? React.memo(IconSunnyQingBaitian) : IconSunnyQingBaitian;

export default IconSunnyQingBaitian;