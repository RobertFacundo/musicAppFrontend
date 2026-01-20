import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithRouter } from "./renderWithRouter";
import AlbumView from "../AlbumView";
import { useAlbum } from "../hooks/useAlbum";

vi.mock("../hooks/useAlbum");

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<typeof import("react-router-dom")>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock("../components/TopTrackList", () => ({
    default: ({ tracks }: any) => (
        <div data-testid="top-tracks">
            Tracks:{tracks.length}
        </div>
    ),
}));

describe("AlbumView", () => {
    it("shows no album when id param is missing", () => {
        renderWithRouter(<AlbumView />, {
            route: "/album",
        });

        expect(
            screen.getByText(/no album/i)
        ).toBeInTheDocument();
    });

    it("shows loading state", () => {
        vi.mocked(useAlbum).mockReturnValue({
            album: null,
            isLoading: true,
            error: null,
        } as any);

        renderWithRouter(<AlbumView />, {
            route: "/album/1",
        });

        expect(
            screen.getByText(/loading/i)
        ).toBeInTheDocument();
    });

    it("shows error state", () => {
        vi.mocked(useAlbum).mockReturnValue({
            album: null,
            isLoading: false,
            error: new Error("error"),
        } as any);

        renderWithRouter(<AlbumView />, {
            route: "/album/1",
        });

        expect(
            screen.getByText(/error/i)
        ).toBeInTheDocument();
    });

    it("shows no album found", () => {
        vi.mocked(useAlbum).mockReturnValue({
            album: null,
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<AlbumView />, {
            route: "/album/1",
        });

        expect(
            screen.getByText(/no album found/i)
        ).toBeInTheDocument();
    });

    it("renders album info and tracks", () => {
        vi.mocked(useAlbum).mockReturnValue({
            album: {
                id: 1,
                title: "Random Access Memories",
                cover_medium: "img",
                release_date: "2013-05-17",
                artist: {
                    id: 99,
                    name: "Daft Punk",
                },
                tracks: [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                ],
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<AlbumView />, {
            route: "/album/1",
        });

        expect(
            screen.getByText("Random Access Memories")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Daft Punk")
        ).toBeInTheDocument();

        expect(
            screen.getByText(/release:2013-05-17/i)
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("top-tracks")
        ).toHaveTextContent("Tracks:3");
    });

    it("navigates to artist page when artist name is clicked", () => {
        vi.mocked(useAlbum).mockReturnValue({
            album: {
                id: 1,
                title: "RAM",
                cover_medium: "img",
                release_date: "2013",
                artist: {
                    id: 42,
                    name: "Daft Punk",
                },
                tracks: [],
            },
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<AlbumView />, {
            route: "/album/1",
        });

        fireEvent.click(
            screen.getByText("Daft Punk")
        );

        expect(mockNavigate).toHaveBeenCalledWith("/artist/42");
    });
});
