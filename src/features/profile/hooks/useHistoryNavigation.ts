import { useNavigate } from "react-router-dom";
import type { User } from "../../auth/types";

export const useHistoryNavigation = () => {
    const navigate = useNavigate();

    const goToHistoryItem = (item: User['history'][number]) => {
        switch (item.type) {
            case 'track':
                navigate(`/track/${item.deezerId}`);
                break;
            case 'artist':
                navigate(`/artist/${item.deezerId}`);
                break;
            case 'album':
                navigate(`/album/${item.deezerId}`);
                break;
        }
    };

    return { goToHistoryItem };
}