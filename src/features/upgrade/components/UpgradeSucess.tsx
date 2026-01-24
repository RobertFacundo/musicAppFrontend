import { useNavigate, useSearchParams } from "react-router-dom"
import { useMe } from "../../auth/hooks/useQueries";
import { useSession } from "../hook/useUpgrade";
import { useEffect} from "react";
import { useAppDispatch } from "../../../shared/redux/hooks";
import { setUser } from "../../auth/store/authSlice";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const dispatch = useAppDispatch();

    const { data: sessionData, isLoading: sessionLoading} = useSession(sessionId || "");
    const { refetch: refetchMe, data: meData} = useMe();

    useEffect(() => {
        if (sessionData?.payment_status === 'paid') {
            refetchMe().then ((res:any)=>{
                if(res?.data?.user){
                dispatch(setUser(res.data))
                }
            })
        }
    }, [sessionData, useAppDispatch, refetchMe]);

    useEffect(() => {
        if (meData?.isPremium) {
            setTimeout(() => navigate('/'), 2000);
        }
    }, [navigate, meData]);

    console.log(meData, 'log del me data')

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold">
                {sessionLoading
                    ? "Checking payment..."
                    : meData?.isPremium
                        ? "🎉 Welcome to Premium"
                        : "Payment not confirmed"}
            </h1>
            <p>
                {sessionLoading
                    ? "Verifying payment..."
                    : meData?.isPremium
                        ? "Redirecting..."
                        : "If payment is pending, wait a few seconds."}
            </p>
        </div>
    )
};

export default UpgradeSuccess;