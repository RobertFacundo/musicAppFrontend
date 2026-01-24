import api from "../../../shared/config/axios";

export type CreateCheckoutSessionResponse = {
    checkoutUrl: string;
};

class UpgradeService {
    async createCheckoutSession(): Promise<CreateCheckoutSessionResponse> {
        const { data } = await api.post<CreateCheckoutSessionResponse>(
            '/api/upgrade/create-checkout-session'
        );

        return data;
    }
};

export const upgradeService = new UpgradeService();