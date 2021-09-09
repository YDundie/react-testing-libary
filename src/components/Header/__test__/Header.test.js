import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text as title prop', () => {
    render(<Header title='My Header' />);
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

// it('should render same text as title prop', () => {
//     render(<Header title='My Header' />);
//     const headingElement = screen.getByRole("heading")
//     expect(headingElement).toBeInTheDocument();
// });


// // Find by

// it('should render same text as title prop', async () => {
//     render(<Header title='My Header' />);
//     const headingElement = await screen.findByText(/my header/i)
//     expect(headingElement).toBeInTheDocument();
// });

// // Query By


// it('should render same text as title prop', async () => {
//     render(<Header title='My Header' />);
//     const headingElement = screen.queryByText(/Dogs/i)
//     expect(headingElement).not.toBeInTheDocument();
// });


// // GetAllBy

// it('should render one heading', async () => {
//     render(<Header title='My Header' />);
//     const headingElement = screen.getAllByRole("heading")
//     expect(headingElement.length).toBe(1);
// });