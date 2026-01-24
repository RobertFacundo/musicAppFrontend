import { useMutation } from "@tanstack/react-query";
import { upgradeService, type CreateCheckoutSessionResponse } from "../services/upgrade.service";

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