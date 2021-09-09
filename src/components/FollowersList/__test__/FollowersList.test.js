import { render, screen, getByTestId, findByTestId } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom'

const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList></FollowersList>
    </BrowserRouter>
}

it('should render followers ', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0")
    expect(followerDivElement).toBeInTheDocument()
});

// it('should render 5 followers ', async () => {
//     render(<MockFollowersList />);
//     const followerDivElement = await screen.findAllByTestId(/follower-item/i)
//     expect(followerDivElement.length).toBe(5)
// });
