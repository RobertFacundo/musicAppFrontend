import { useParams } from "react-router-dom";
import { useGenre } from "./hooks/useGenre";
import ArtistCard from "./components/ArtistCard";
import { Loader } from "../../shared/components/Loader/Loader";
import { useTranslation } from "react-i18next";

const GenreView = () => {
    const { genreId } = useParams<{ genreId: string }>();
    const { artists, isLoading, error } = useGenre(genreId);
    const { t } = useTranslation();

    if (isLoading) return <Loader />;
    if (error) return <p className="p-6 text-red-500">{t('home.error')}</p>

    return (
        <div className="p-6 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold dark:text-white mb-6 ">
                {t('genre.title')}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto">
                {artists.map((artist) => (
                    <ArtistCard
                        key={artist.id}
                        id={artist.id}
                        title={artist.name}
                        image={artist.picture_medium}
                    />
                ))}
            </div>
        </div>
    )
};

export default GenreView;