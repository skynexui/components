import React from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import * as iconSet from 'react-icons/fa';
import { BoxBase } from '../box/box-base';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface IconProps {
  size?: string | number;
  name?: keyof typeof iconSet;
  styleSheet?: StyleSheet;
  className?: string;
}
export function Icon({ name, styleSheet, ...props }: IconProps): JSX.Element {
  const CurrentIcon =
    iconSet[name] || iconSet[`Fa${capitalize(name)}` as unknown as never];
  const size = typeof props.size === 'string' ? props.size : `${props.size}px`;

  return (
    <BoxBase
      styleSheet={{
        width: size,
        height: size,
        ...styleSheet,
      }}
      {...props}
    >
      <CurrentIcon className="skn-icon-wrapper" />
      <style global jsx>{`
        svg.skn-icon-wrapper {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </BoxBase>
  );
}

Icon.defaultProps = {
  name: 'arrowUp',
  className: '',
  size: '1.6ch',
  styleSheet: {
    color: 'currentColor',
  },
};
