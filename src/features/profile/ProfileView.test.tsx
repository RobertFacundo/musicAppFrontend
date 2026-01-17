import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import ProfileView from './ProfileView';

vi.mock('../../shared/redux/hooks', () => ({
    useAppSelector: vi.fn()
}))

vi.mock('./components/ProfileHeader', () => ({
    ProfileHeader: ({ user }: any) => (
        <div data-testid='profile-header'>Header - {user.name}</div>
    )
}))

vi.mock('./components/ProfileSettings', () => ({
    ProfileSettings: () => (
        <div data-testid='profile-settings'>Settings</div>
    )
}))

vi.mock('./components/ProfileCardHistory', () => ({
    ProfileCardHistory: ({ history }: any) => (
        <div data-testid='profile-history'>
            History:{history.length}
        </div>
    )
}))

vi.mock('./components/ProfileCardFavorites',()=>({
    ProfileCardFavorites: ({favorites}: any)=>(
        <div data-testid='profile-favorites'>
            Favorites:{favorites.length}
        </div>
    )
}))

import { useAppSelector } from '../../shared/redux/hooks';

describe('ProfileView', () => {
    it('renders fallback when no user is loaded', () => {
        vi.mocked(useAppSelector).mockReturnValue(null)

        render(<ProfileView />)

        expect(
            screen.getByText(/no user loaded/i)
        ).toBeInTheDocument();
    })

    it('rendersprofile sections when user exists', () => {
        const mockUser = {
            name: 'facundo',
            favorites: ['song1', 'song2'],
            history: ['songA']
        }

        vi.mocked(useAppSelector).mockReturnValue(mockUser as any)

        render(<ProfileView />)

        expect(screen.getByTestId('profile-header')).toHaveTextContent('facundo')
        expect(screen.getByTestId('profile-settings')).toBeInTheDocument()
        expect(screen.getByTestId('profile-favorites')).toHaveTextContent('2')
        expect(screen.getByTestId('profile-history')).toHaveTextContent('1')
    })
})