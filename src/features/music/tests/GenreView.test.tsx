import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithRouter } from "./renderWithRouter";
import GenreView from "../GenreView";
import { useGenre } from "../hooks/useGenre";

vi.mock("../hooks/useGenre");

vi.mock("../components/ArtistCard", () => ({
    default: ({ title }: any) => (
        <div data-testid="artist-card">{title}</div>
    ),
}));

describe("GenreView", () => {
    it("shows loading state", () => {
        vi.mocked(useGenre).mockReturnValue({
            artists: [],
            isLoading: true,
            error: null,
        } as any);

        renderWithRouter(<GenreView />, {
            route: "/genre/1",
        });

        expect(
            screen.getByText(/loading artists/i)
        ).toBeInTheDocument();
    });

    it("shows error state", () => {
        vi.mocked(useGenre).mockReturnValue({
            artists: [],
            isLoading: false,
            error: new Error("error"),
        } as any);

        renderWithRouter(<GenreView />, {
            route: "/genre/1",
        });

        expect(
            screen.getByText(/failed to load artists/i)
        ).toBeInTheDocument();
    });

    it("renders artists list", () => {
        vi.mocked(useGenre).mockReturnValue({
            artists: [
                {
                    id: 1,
                    name: "Artist One",
                    picture_medium: "img",
                },
                {
                    id: 2,
                    name: "Artist Two",
                    picture_medium: "img",
                },
            ],
            isLoading: false,
            error: null,
        } as any);

        renderWithRouter(<GenreView />, {
            route: "/genre/1",
        });

        expect(
            screen.getByText(/artists of the genre/i)
        ).toBeInTheDocument();

        const cards = screen.getAllByTestId("artist-card");
        expect(cards).toHaveLength(2);

        expect(
            screen.getByText("Artist One")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Artist Two")
        ).toBeInTheDocument();
    });
});
