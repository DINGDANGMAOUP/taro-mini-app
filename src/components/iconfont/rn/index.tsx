/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCat from './IconCat';
import IconClearNightQingYewan from './IconClearNightQingYewan';
import IconSunnyQingBaitian from './IconSunnyQingBaitian';
export { default as IconCat } from './IconCat';
export { default as IconClearNightQingYewan } from './IconClearNightQingYewan';
export { default as IconSunnyQingBaitian } from './IconSunnyQingBaitian';

export type IconNames = 'cat' | 'ClearNight-qing-yewan' | 'Sunny-qing-baitian';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'cat':
      return <IconCat key="1" {...rest} />;
    case 'ClearNight-qing-yewan':
      return <IconClearNightQingYewan key="2" {...rest} />;
    case 'Sunny-qing-baitian':
      return <IconSunnyQingBaitian key="3" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
