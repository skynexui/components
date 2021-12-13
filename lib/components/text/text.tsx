import React from 'react';
import { StyleSheet } from 'core/stylesheet/stylesheet';
import { Box } from 'components/box/box';

interface TextProps {
  styleSheet: StyleSheet;
  children: React.ReactNode;
}

export function Text({ children, styleSheet }: TextProps) {
  return (
    <Box styleSheet={styleSheet}>
      <span>
        {children}
      </span>
    </Box>
  )
}

Text.defaultProps = {
  styleSheet: {},
}