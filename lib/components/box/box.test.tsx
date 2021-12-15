import React from 'react';
import { Box } from '@lib/components';
import { render } from '@lib/utils/test/utils';

it('works', () => {
  const { container } = render(<Box>Hello a</Box>);
  expect(container).toMatchSnapshot();
});
