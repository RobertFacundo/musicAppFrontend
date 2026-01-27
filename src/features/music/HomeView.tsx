import { useNavigate } from "react-router-dom";
import HomeCard from "./components/HomeCard";
import { useHomeMusic } from "./hooks/useHomeMusic";
import { Loader } from "../../shared/components/Loader/Loader";
import { useTranslation } from "react-i18next";

const HomeView = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        artists,
        genres,
        playlists,
        isLoading,
        error,
    } = useHomeMusic();

    if (isLoading) {
        return (
            <Loader />
        )
    }
    if (error) {
        return (
            <div className="p-6">
                <p className="text-sm text-red-500">
                   {t('home.error')}
                </p>
            </div>
        )
    }

    return (
        <div className="p-6 h-full flex flex-col  overflow-y-auto">
            <HomeCard
                title="Popular Artists"
                items={
                    artists?.map((a) => ({
                        id: a.id,
                        title: a.name,
                        image: a.image,
                    })) ?? []
                }
                onItemClick={(id) => navigate(`/artist/${id}`)}
            />
            <HomeCard
                title="Browse genre"
                items={
                    genres?.map((g) => ({
                        id: g.id,
                        title: g.name,
                        image: g.image
                    })) ?? []
                }
                onItemClick={(id) => navigate(`/genre/${id}`)}
            />
            <HomeCard
                title="Featured playlists"
                items={
                    playlists?.map((p) => ({
                        id: p.id,
                        title: p.title,
                        image: p.image,
                    })) ?? []
                }
                onItemClick={(id) => navigate(`/playlist/${id}`)}
            />
        </div>
    )
};

export default HomeView;