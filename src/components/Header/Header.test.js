import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header test", () => {
    test('should check the prop', () => {
      render(<Header title={"Header"} />);
      const headingElement = screen.getByRole('heading', {name: "Header"});
      expect(headingElement).toBeTruthy();
    });
})
