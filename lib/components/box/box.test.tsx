import React from 'react';
import { Box } from '@lib/components';
import { render } from '@lib/utils/test/rtl-utils';

it('works', () => {
  const { container } = render(
    <Box
      styleSheet={{
        backgroundColor: {
          'Breakpoints.xs': 'red',
        },
        padding: {
          'Breakpoints.xs': 10,
        },
      }}
    >
      Hello a
    </Box>
  );
  expect(container).toMatchSnapshot();
});
