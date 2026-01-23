type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
    return (
        <input
            type="text"
            placeholder="Search Artists, tracks..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-white dark:bg-white text-sm outline-none"
        />
    );
};

export default SearchInput;