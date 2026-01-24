import { useNavigate } from "react-router-dom"
import { useMe } from "../../auth/hooks/useQueries";
import { useEffect } from "react";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const { refetch } = useMe();

    useEffect(() => {
        refetch();
        setTimeout(() => navigate('/'), 2000);
    }, []);

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold">🎉 Welcome to Premium</h1>
            <p>Redirecting...</p>
        </div>
    )
};

export default UpgradeSuccess;