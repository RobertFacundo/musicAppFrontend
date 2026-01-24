import { useNavigate, useSearchParams } from "react-router-dom"
import { useMe } from "../../auth/hooks/useQueries";
import { useSession } from "../hook/useUpgrade";
import { useEffect } from "react";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const { data: sessionData, isFetching: sessionFetching } = useSession(sessionId || "");
    const { refetch: refetchMe, data: meData, isFetching: meFetching } = useMe();

    useEffect(() => {
        if (!sessionFetching && sessionData?.payment_status === 'paid') {
            refetchMe();
        }
    }, [sessionFetching, sessionData]);

    useEffect(() => {
        if (!meFetching && meData?.user?.isPremium) {
            setTimeout(() => navigate('/'), 2000);
        }
    }, [meFetching, meData]);

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold">
                {sessionFetching ? "Checking payment..." :
                    meData?.user?.isPremium ? "🎉 Welcome to Premium" :
                        "Payment not confirmed"}
            </h1>
            <p>
                {sessionFetching ? "Verifying payment..." :
                    meData?.user?.isPremium ? "Redirecting..." :
                        "If payment is pending, wait a few seconds."}
            </p>
        </div>
    )
};

export default UpgradeSuccess;