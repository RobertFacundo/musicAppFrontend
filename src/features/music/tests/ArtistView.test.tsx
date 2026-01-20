import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from 'vitest';
import { renderWithRouter } from "./renderWithRouter";
import ArtistView from "../ArtistView";
import { useArtist } from "../hooks/useArtist";

vi.mock('../hooks/useArtist');

vi.mock('../components/ArtistHeader', () => ({
    default: ({ artist }: any) => (
        <div data-testid='artist-header'>
            {artist.name}
        </div>
    )
}));

vi.mock('../components/TopTrackList', () => ({
    default: ({ tracks }: any) => (
        <div data-testid='top-tracks'>
            Tracks:{tracks.length}
        </div>
    )
}));

describe('Artistview', () => {
    it('shows loading state', () => {
        vi.mocked(useArtist).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: null,
        } as any);

        renderWithRouter(<ArtistView />, {
            route: '/artist/1',
        })

        expect(screen.getByText(/loading artist/i)).toBeInTheDocument();
    });

    it('shows error state', () => {
        vi.mocked(useArtist).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error('error'),
        } as any);

        renderWithRouter(<ArtistView />, {
            route: '/artist/1',
        });

        expect(screen.getByText(/failed to load artist/i)).toBeInTheDocument();
    });

    it('rendersartist header & top trakcs when data isloaded', () => {
        vi.mocked(useArtist).mockReturnValue({
            data: {
                artist: {
                    id: 1,
                    name: 'Daft Punk',
                    image: 'img',
                    fans: 1000,
                    albums: [],
                },
                topTracks: [
                    {
                        id: 1,
                        title: 'Track 1',
                        duration: 200,
                        preview: null,
                        album: {
                            id: 10,
                            title: 'Album',
                            image: 'img',
                        },
                    },
                ],
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<ArtistView />, {
            route: '/artist/,',
        });

        expect(screen.getByTestId('artist-header')).toHaveTextContent('Daft Punk');
        expect(screen.getByTestId('top-tracks')).toHaveTextContent('Tracks:1')
    })
})