import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render } from '@testing-library/react';

export const renderWithRouterAndRoute = (
    ui: React.ReactNode,
    {
        route = '/',
        path = '/',
    }: { route?: string; path?: string } = {}
) => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path={path} element={ui} />
            </Routes>
        </MemoryRouter>
    );
};