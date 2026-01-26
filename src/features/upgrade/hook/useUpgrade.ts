import { useMutation, useQuery } from "@tanstack/react-query";
import { type GetSessionResponse, upgradeService, type CreateCheckoutSessionResponse } from "../services/upgrade.service";

export const useUpgrade = () => {
    const mutation = useMutation<
        CreateCheckoutSessionResponse,
        Error,
        void
    >({
        mutationFn: () => upgradeService.createCheckoutSession(),
        onSuccess: (data) => {
            window.location.href = data.checkoutUrl;
        },
        onError: (error) => {
            console.error('error creating checkout session', error)
        }
    })

    return {
        ...mutation,
        isLoading: mutation.status === 'pending'
    }
};

export const useSession = (sessionId: string) => {
    return useQuery<GetSessionResponse>({
        queryKey: ['session', sessionId],
        queryFn: () => upgradeService.getSession(sessionId),
        refetchInterval: (query) => {
            const data = query.state.data;
            if (data?.payment_status === 'paid') return false;
            return 2000;
        },
        enabled: !!sessionId,
    });
}