import type { SearchResult } from "../../../features/music/services/search.service";
import SearchSection from "./SearchSection";

type Props = {
    data?: SearchResult;
    isLoading: boolean;
    onSelect: () => void;
};

const SearchDropdown = ({ data, isLoading, onSelect }: Props) => {
    if (isLoading) {
        return (
            <div className="absolute top-full mt-2 w-full bg-white dar:bg-neutral-900 rounded-md shadow p-4 text-sm">
                Searching...
            </div>
        );
    }

    if (!data) return null;

    const isEmpty =
        !data.artists.length &&
        !data.tracks.length &&
        !data.albums.length &&
        !data.playlists.length;

    if (isEmpty) {
        return (
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-neutral-900 rounded-md shadow p-4 text-sm">
                No results found...
            </div>
        )
    }

    return (
        <div className="absolute top-full mt-2 h-110 overflow-y-auto w-full bg-white dark:bg-neutral-900 rounded-md shadow flex flex-col gap-3 p-3 text-sm">
            <SearchSection
                title='Artists'
                items={data.artists}
                type='artist'
                onSelect={onSelect}
            />
            <SearchSection
                title='Tracks'
                items={data.tracks}
                type='track'
                onSelect={onSelect}
            />
            <SearchSection
                title='Albums'
                items={data.albums}
                type='album'
                onSelect={onSelect}
            />
            <SearchSection
                title='Playlists'
                items={data.playlists}
                type='playlist'
                onSelect={onSelect}
            />
        </div>
    )
};

export default SearchDropdown;