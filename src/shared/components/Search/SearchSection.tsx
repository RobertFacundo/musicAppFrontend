import SearchResultItem from "./SearchResultItem";

type Props = {
    title: string;
    items: any[];
    type: 'artist' | 'track' | 'album' | 'playlist';
    onSelect: () => void;
}

const SearchSection = ({ title, items, type, onSelect }: Props) => {
    if (!items.length) return null;

    return (
        <div className="flex flex-col gap-1">
            <span className="text-xl uppercase text-neutral-400">{title}</span>
            {items.map((item) => (
                <SearchResultItem
                    key={item.id}
                    item={item}
                    type={type}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default SearchSection;