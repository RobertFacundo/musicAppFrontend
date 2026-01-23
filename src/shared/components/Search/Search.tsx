import { useState, useRef, useEffect } from "react";
import { useSearch } from "../../../features/music/hooks/useSearch";
import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";

const Search = () => {
    const [query, setQuery] = useState('');
    const { data, isLoading } = useSearch(query);

    const containerRef = useRef<HTMLDivElement>(null);

    const clearSearch = () => setQuery('');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                clearSearch();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative w-72">
            <SearchInput value={query} onChange={setQuery} />
            {query.length >= 2 && (
                <SearchDropdown
                    data={data}
                    isLoading={isLoading}
                    onSelect={clearSearch}
                />
            )}
        </div>
    )
};

export default Search;