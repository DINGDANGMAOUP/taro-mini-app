/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconCat from './IconCat';
import IconClearNightQingYewan from './IconClearNightQingYewan';
import IconSunnyQingBaitian from './IconSunnyQingBaitian';
export { default as IconCat } from './IconCat';
export { default as IconClearNightQingYewan } from './IconClearNightQingYewan';
export { default as IconSunnyQingBaitian } from './IconSunnyQingBaitian';

export type IconNames = 'cat' | 'ClearNight-qing-yewan' | 'Sunny-qing-baitian';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'cat':
      return <IconCat {...rest} />;
    case 'ClearNight-qing-yewan':
      return <IconClearNightQingYewan {...rest} />;
    case 'Sunny-qing-baitian':
      return <IconSunnyQingBaitian {...rest} />;

  }

  return null;
};

export default IconFont;
