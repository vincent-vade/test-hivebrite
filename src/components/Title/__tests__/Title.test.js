import React from 'react';
import { render } from '@testing-library/react';

import Title from '../Title';
// @TODO => use alias like @context
import CitiesAppProvider from '../../../context/CitiesProvider';

describe('<Title />', () => {
  it('render with default city => Los Angeles', () => {
    const tree = (
      <CitiesAppProvider>
        <Title />
      </CitiesAppProvider>
    );

    const { getByText, container } = render(tree);

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(getByText(/^Los Angeles/).textContent).toBe(
      'currentCity: Los Angeles',
    );
  });
});
