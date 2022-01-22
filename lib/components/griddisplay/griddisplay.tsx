import React from 'react';
import { BoxBase } from '@lib/components/box/box-base';

interface GridDisplayProps<DataList> {
  data: DataList[];
  crossAxisCount: number;
  tag?: string;
  className?: string;
  itemBuilder(index: number): React.ReactNode;
}
export default function GridDisplay<DataList>({
  tag,
  className,
  ...props
}: GridDisplayProps<DataList>): JSX.Element {
  return (
    <BoxBase as={tag} className={`${className} sknui-griddisplay`} {...props} />
  );
}

GridDisplay.defaultProps = {
  tag: 'div',
  className: '',
};
