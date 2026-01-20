import { useNavigate } from "react-router-dom";

type Props = {
    id: number;
    title: string;
    image: string;
};

const ArtistCard = ({ id, title, image }: Props) => {
    const navigate = useNavigate();

    return (
        <div
            className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            onClick={() => navigate(`/artist/${id}`)}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
            </div>
        </div >
    )
};

export default ArtistCard;