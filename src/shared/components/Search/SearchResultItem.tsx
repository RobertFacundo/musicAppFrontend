import { useNavigate } from "react-router-dom";

type Props = {
    item: any;
    type: 'artist' | 'track' | 'album' | 'playlist';
    onSelect: () => void;
};

const SearchResultItem = ({ item, type, onSelect }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${type}/${item.id}`);
        onSelect();
    }

    return (
        <div
            onClick={handleClick}
            className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
            <img src={item.image} alt={item.title || item.name} className="w-8 h-8 rounded object-cover" />
            <span className="truncate dark:text-white">
                {item.title || item.name}
            </span>
        </div>
    )
};

export default SearchResultItem;