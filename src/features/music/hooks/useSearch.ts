import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchService, type SearchResult } from "../services/search.service";

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 400;

export const useSearch = (query: string) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, DEBOUNCE_MS);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    const searchQuery = useQuery<SearchResult>({
        queryKey: ['search', debouncedQuery],
        queryFn: () => searchService.search(debouncedQuery),
        enabled: debouncedQuery.length >= MIN_QUERY_LENGTH,
        staleTime: 60 * 1000,
        retry: false
    });

    return {
        ...searchQuery,
        debouncedQuery,
        isEmpty:
            debouncedQuery.length >= MIN_QUERY_LENGTH &&
            !searchQuery.isLoading &&
            !searchQuery.data,
    };
};