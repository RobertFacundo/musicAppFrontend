import { useNavigate } from "react-router-dom";
import HomeCard from "./components/HomeCard";
import { useHomeMusic } from "./hooks/useHomeMusic";

const HomeView = () => {
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
            <div className="p-6">
                <p className="text-sm text-neutral-500">
                    Loading music...
                </p>
            </div>
        )
    }
    if (error) {
        return (
            <div className="p-6">
                <p className="text-sm text-red-500">
                    Failed to load music content
                </p>
            </div>
        )
    }

    return (
        <div className="p-6">
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
                onItemClick={(id) => { console.log('Genre clicked', id) }}
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