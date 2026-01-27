import { useNavigate, useSearchParams } from "react-router-dom"
import { useMe } from "../../auth/hooks/useQueries";
import { useSession } from "../hook/useUpgrade";
import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/redux/hooks";
import { setUser } from "../../auth/store/authSlice";
import { Loader } from "../../../shared/components/Loader/Loader";
import { useTranslation } from "react-i18next";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const dispatch = useAppDispatch();

    const { data: sessionData, isLoading: sessionLoading } = useSession(sessionId || "");
    const { refetch: refetchMe, data: meData } = useMe();

    const { t } = useTranslation();

    useEffect(() => {
        if (sessionData?.payment_status === 'paid') {
            refetchMe().then((res: any) => {
                if (res?.data?.user) {
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

    const isPremium = meData?.isPremium

    return (
        <div className="min-h-full flex items-center justify-center px-6">
            <div
                className="
          p-8 rounded-xl shadow-xl
          bg-white/80 dark:bg-neutral-900/80
          text-center max-w-md w-full
        "
            >
                <h1
                    className="
            text-2xl font-bold mb-2
            text-neutral-900 dark:text-white
          "
                >
                    {sessionLoading
                        ? t('success.titleLoading')
                        : isPremium
                            ? t("success.welcome")
                            : t('success.processing')}
                </h1>

                <p
                    className="
            text-sm mb-6
            text-neutral-600 dark:text-neutral-400
          "
                >
                    {sessionLoading
                        ? t('success.verifying')
                        : isPremium
                            ? t('success.redirecting')
                            : t('success.seconds')}
                </p>

                {sessionLoading && (
                    <div className="flex justify-center">
                        <Loader />
                    </div>
                )}

                {isPremium && (
                    <div className="mt-4 text-yellow-500 font-medium text-sm">
                        Premium 👑
                    </div>
                )}
            </div>
        </div>
    )
};

export default UpgradeSuccess;