
import { render } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
  it('renders the greeting', () => {
    const { getByText } = render(<Hello name="Milos" />);
    expect(getByText('Hello, Milos!')).toBeTruthy();
  });
});
