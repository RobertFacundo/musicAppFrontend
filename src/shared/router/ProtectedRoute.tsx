import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";

interface ProtectedRouteProps {
    children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    )

    if (!isAuthenticated) {
        return <Navigate to='/auth' replace />
    }

    return <>{children}</>;
}