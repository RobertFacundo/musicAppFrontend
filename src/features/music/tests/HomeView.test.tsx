import { screen } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import HomeView from '../HomeView';
import { useHomeMusic } from '../hooks/useHomeMusic';
import { expect, vi, it, describe } from 'vitest';

vi.mock('../hooks/useHomeMusic');

describe('HomeView', () => {
    it('show loading state', () => {
        vi.mocked(useHomeMusic).mockReturnValue({
            artists: [],
            genres: [],
            playlists: [],
            isLoading: true,
            error: null
        });

        renderWithRouter(<HomeView />);
        expect(screen.getByText(/loading music/i)).toBeInTheDocument();
    });

    it('renders sections', () => {
        vi.mocked(useHomeMusic).mockReturnValue({
            artists: [{ id: 1, name: 'Artist', image: 'img' }],
            genres: [{ id: 1, name: 'Rock', image: 'img' }],
            playlists: [{ id: 1, title: 'Playlist', image: 'img' }],
            isLoading: false,
            error: null,
        });

        renderWithRouter(<HomeView />);

        expect(screen.getByText(/popular artists/i)).toBeInTheDocument();
        expect(screen.getByText(/browse genre/i)).toBeInTheDocument();
        expect(screen.getByText(/featured playlists/i)).toBeInTheDocument();
    })
})