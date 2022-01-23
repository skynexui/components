import React from 'react';
import {
  StyleSheet,
  ResponsiveProperty,
} from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface GridDisplayProps<DataListItem> {
  data: DataListItem[];
  crossAxisCount?: ResponsiveProperty<number>;
  tag?: string;
  className?: string;
  itemBuilder(index: number, item: DataListItem): React.ReactNode;
  styleSheet?: StyleSheet;
}
export function GridDisplay<DataList>({
  tag,
  className,
  data,
  itemBuilder,
  styleSheet,
  crossAxisCount,
  ...props
}: GridDisplayProps<DataList>): JSX.Element {
  const finalStyleSheet = {
    ...styleSheet,
  };
  return (
    <BoxBase
      as={tag}
      styleSheet={{
        ...finalStyleSheet,
        display: 'grid',
        gridTemplateColumns: {
          xs: crossAxisCount.xs && `repeat(${crossAxisCount.xs}, 1fr)`,
          sm: crossAxisCount.sm && `repeat(${crossAxisCount.sm}, 1fr)`,
          md: crossAxisCount.md && `repeat(${crossAxisCount.md}, 1fr)`,
          lg: crossAxisCount.lg && `repeat(${crossAxisCount.lg}, 1fr)`,
          xl: crossAxisCount.xl && `repeat(${crossAxisCount.xl}, 1fr)`,
        },
        gridAutoRows: '1fr',
      }}
      className={`${className} sknui-griddisplay`}
      {...props}
    >
      {data.map((item, index) => itemBuilder(index, item))}
      <style jsx>{`
        ${tag}.sknui-griddisplay {
          background: red;
        }
      `}</style>
    </BoxBase>
  );
}

GridDisplay.defaultProps = {
  tag: 'div',
  className: '',
  styleSheet: {},
  crossAxisCount: 1,
};
