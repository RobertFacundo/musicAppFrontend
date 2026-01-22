import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TrackView from '../TrackView';
import { useTrack } from '../hooks/useTrack';
import { renderWithRouterAndRoute } from './renderWithRouterAndRoute';

vi.mock('../hooks/useTrack');

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
});

describe('TrackView', () => {
    it('shows error when id params is missing', () => {
        renderWithRouterAndRoute(<TrackView />, {
            route: '/track',
            path: '/track',
        });

        expect(screen.getByText(/track id is missing/i)).toBeInTheDocument();
    })

    it('shows loading state', () => {
        vi.mocked(useTrack).mockReturnValue({
            track: null,
            isLoading: true,
            error: null,
        } as any);

        renderWithRouterAndRoute(<TrackView />, {
            route: '/track/1',
            path: '/track/:id'
        });

        expect(screen.getByText(/loading track/i)).toBeInTheDocument();
    });

    it('shows error state', () => {
        vi.mocked(useTrack).mockReturnValue({
            track: null,
            isLoading: false,
            error: new Error('error'),
        } as any);

        renderWithRouterAndRoute(<TrackView />, {
            route: '/track/1',
            path: '/track/:id'
        });

        expect(screen.getByText(/failed to load track/i)).toBeInTheDocument();
    });

    it('renders track info', () => {
        vi.mocked(useTrack).mockReturnValue({
            track: {
                id: 1,
                title: "Instant Crush",
                preview: "audio.mp3",
                artist: {
                    id: 42,
                    name: "Daft Punk",
                },
                album: {
                    id: 99,
                    title: "Random Access Memories",
                    cover_medium: "img",
                },
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouterAndRoute(<TrackView />, {
            route: '/track/1',
            path: '/track/:id'
        });
        expect(screen.getByText('Instant Crush')).toBeInTheDocument();
        expect(screen.getByText(/artist: daft punk/i)).toBeInTheDocument();
        expect(screen.getByText(/random access memories/i)).toBeInTheDocument();
        expect(screen.getByTestId('audio-preview')).toBeInTheDocument();
    });

    it('navigates to artist when name is clicked', () => {
        vi.mocked(useTrack).mockReturnValue({
            track: {
                id: 1,
                title: "Track",
                preview: null,
                artist: { id: 10, name: "Artist" },
                album: { id: 20, title: "Album", cover_medium: "img" },
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouterAndRoute(<TrackView />, {
            route: '/track/1',
            path: '/track/:id',
        });

        fireEvent.click(screen.getByText(/artist: artist/i));

        expect(mockNavigate).toHaveBeenCalledWith('/artist/10');
    });

    it('navigates to album when album name is clicked', () => {
        vi.mocked(useTrack).mockReturnValue({
            track: {
                id: 1,
                title: "Track",
                preview: null,
                artist: { id: 10, name: "Artist" },
                album: { id: 20, title: "Album", cover_medium: "img" },
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouterAndRoute(<TrackView />, {
            route: '/track/1',
            path: '/track/:id',
        });

        fireEvent.click(screen.getByTestId('album-click'));

        expect(mockNavigate).toHaveBeenCalledWith('/album/20');
    });
});