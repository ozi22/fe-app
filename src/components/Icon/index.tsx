import React, { FC } from 'react';
import { Icons, icons } from './icons';
import { SC } from '../../styles/theme';
import { IconWrapper } from './style';

export interface IconProps extends SC {
  name: Icons;
  width?: number;
  height?: number;
  color?: string;
}

const getIcon = (name: Icons): string => icons(name);

const Icon: FC<IconProps & SC> = ({ name, ...rest }) => {
  return <IconWrapper name={name} dangerouslySetInnerHTML={{ __html: getIcon(name) }} {...rest} />;
};

export default Icon;
