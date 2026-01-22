import { useNavigate } from "react-router-dom";
import type { Album } from "../services/artist.service";

type Props = {
    albums: Album[];
};

const AlbumCards = ({ albums }: Props) => {
    const navigate = useNavigate();

    const sortedAlbums = [...albums].sort(
        (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
    );

    return (
        <section className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Albums</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {sortedAlbums.map(album => (
                        <button
                            key={album.id}
                            onClick={() => navigate(`/album/${album.id}`)}
                            className="text-left group p-6 cursor-pointer max-w-90"
                        >
                            <img src={album.image} alt={album.title} className="rounded-lg group-hover:opacity-80 transition" />
                            <p className="mt-2 text-2xl font-medium truncate">
                                {album.title}
                            </p>
                            <p className="text-xs text-neutral-400">
                                {album.releaseDate}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AlbumCards;