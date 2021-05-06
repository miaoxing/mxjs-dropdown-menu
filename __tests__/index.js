import React from 'react';
import {render} from '@testing-library/react';
import {DropdownMenu} from '..';

describe('test', () => {
  test('basic', () => {
    const result = render(<DropdownMenu/>);
    expect(result.container).toMatchSnapshot();
  });
});
