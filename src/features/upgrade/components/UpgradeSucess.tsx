import { useNavigate, useSearchParams } from "react-router-dom"
import { useMe } from "../../auth/hooks/useQueries";
import { useSession } from "../hook/useUpgrade";
import { useEffect, useState } from "react";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const { data: sessionData, isLoading: sessionLoading, isSuccess: sessionSuccess } = useSession(sessionId || "");
    const { refetch: refetchMe, data: meData, isFetching: meLoading } = useMe();

    const [alreadyFetched, setAlreadyFetched] = useState(false);

    useEffect(() => {
        if (sessionSuccess && sessionData?.payment_status === 'paid' && !alreadyFetched) {
            refetchMe();
            setAlreadyFetched(true);
        }
    }, [sessionSuccess, sessionData, alreadyFetched, refetchMe]);

    useEffect(() => {
        if (!meLoading && meData?.user?.isPremium) {
            setTimeout(() => navigate('/'), 2000);
        }
    }, [meLoading, meData]);

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold">
                {sessionLoading
                    ? "Checking payment..."
                    : meData?.user?.isPremium
                        ? "🎉 Welcome to Premium"
                        : "Payment not confirmed"}
            </h1>
            <p>
                {sessionLoading
                    ? "Verifying payment..."
                    : meData?.user?.isPremium
                        ? "Redirecting..."
                        : "If payment is pending, wait a few seconds."}
            </p>
        </div>
    )
};

export default UpgradeSuccess;