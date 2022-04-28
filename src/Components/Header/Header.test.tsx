import { render, screen } from '@testing-library/react';

import Header from './index';
import { links } from './index.constants';

test('should render Title', () => {
  render(<Header />);

  const textElement = screen.queryByText(links[0]);
  expect(textElement).toBeInTheDocument();
});
