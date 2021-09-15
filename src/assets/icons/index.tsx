import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg from 'react-native-svg';
import {iconList} from './iconList';

interface IProps {
  size?: number;
  name: string;
  color?: string;
}

export const Icon = ({size = 18, color = '#fff', name, ...props}: IProps) => {
  //@ts-ignore
  if (!iconList[name]) {
    return null;
  }
  //@ts-ignore
  const {viewBox, data} = iconList[name];

  return (
    <Svg
      viewBox={viewBox || '0 0 512 512'}
      height={RFValue(size)}
      width={RFValue(size)}
      {...props}>
      {data(color)}
    </Svg>
  );
};
