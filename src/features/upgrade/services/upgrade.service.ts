import api from "../../../shared/config/axios";

export type CreateCheckoutSessionResponse = {
    checkoutUrl: string;
};

export type GetSessionResponse = {
    payment_status: string;
    metadata: any;
}

class UpgradeService {
    async createCheckoutSession(): Promise<CreateCheckoutSessionResponse> {
        const { data } = await api.post<CreateCheckoutSessionResponse>(
            '/api/upgrade/create-checkout-session'
        );

        return data;
    };

    async getSession(sessionId: string): Promise<GetSessionResponse> {
        const { data } = await api.get<GetSessionResponse>(`/api/upgrade/session/${sessionId}`);
        return data;
    }
};

export const upgradeService = new UpgradeService();