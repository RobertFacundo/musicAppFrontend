import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from 'vitest';
import { renderWithRouter } from "./renderWithRouter";
import PlaylistView from "../PlaylistView";
import { usePlaylist } from "../hooks/usePlaylist";

vi.mock('../hooks/usePlaylist');

vi.mock('../components/TopTrackList', () => ({
    default: ({ tracks }: any) => (
        <div data-testid='top-tracks'>
            Tracks:{tracks.length}
        </div>
    ),
}));

describe("PlaylistView", () => {
    it("shows loading state", () => {
        vi.mocked(usePlaylist).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: null,
        } as any);

        renderWithRouter(<PlaylistView />, {
            route: "/playlist/1",
        });

        expect(
            screen.getByText(/loading playlist/i)
        ).toBeInTheDocument();
    });

    it("shows error state", () => {
        vi.mocked(usePlaylist).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error("error"),
        } as any);

        renderWithRouter(<PlaylistView />, {
            route: "/playlist/1",
        });

        expect(
            screen.getByText(/failed to load playlist/i)
        ).toBeInTheDocument();
    });

    it("renders playlist info and tracks", () => {
        vi.mocked(usePlaylist).mockReturnValue({
            data: {
                id: 1,
                title: "My Playlist",
                picture_medium: "img",
                nb_tracks: 2,
                fans: 150,
                tracks: {
                    data: [
                        {
                            id: 1,
                            title: "Track 1",
                            duration: 200,
                            preview: null,
                            album: {
                                id: 10,
                                title: "Album",
                                cover_medium: "img",
                            },
                        },
                        {
                            id: 2,
                            title: "Track 2",
                            duration: 180,
                            preview: null,
                            album: {
                                id: 11,
                                title: "Album 2",
                                cover_medium: "img",
                            },
                        },
                    ],
                },
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<PlaylistView />, {
            route: "/playlist/1",
        });

        expect(
            screen.getByText("My Playlist")
        ).toBeInTheDocument();

        expect(
            screen.getByText(/2 tracks - 150 followers/i)
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("top-tracks")
        ).toHaveTextContent("Tracks:2");
    });
});