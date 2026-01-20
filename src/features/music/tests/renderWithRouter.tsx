import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (
    ui: React.ReactNode,
    { route = '/' } = {}
) => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            {ui}
        </MemoryRouter>
    );
}