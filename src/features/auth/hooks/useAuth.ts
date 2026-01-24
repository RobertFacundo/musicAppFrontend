import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import { loginSuccess, logout as logoutAction, setUser } from "../store/authSlice";
import { useLogin, useRegister, useMe } from './useQueries';
import type { LoginDTO, RegisterDTO } from '../types';
import { useEffect } from "react";

export const useAuth = () => {
    const dispatch = useAppDispatch();

    const { user, token, isAuthenticated } = useAppSelector(
        (state) => state.auth
    );

    const loginMutation = useLogin();
    const registerMutation = useRegister();
    const meQuery = useMe();

    const login = async (data: LoginDTO) => {
        const response = await loginMutation.mutateAsync(data);

        dispatch(
            loginSuccess({
                user: response.user,
                token: response.token,
            })
        );

        return response;
    };

    const register = async (data: RegisterDTO) => {
        const response = await registerMutation.mutateAsync(data);

        dispatch(
            loginSuccess({
                user: response.user,
                token: response.token,
            })
        );

        return response;
    };

    const logout = () => {
        dispatch(logoutAction());
    };

    useEffect(() => {
        if (meQuery.data && !user) {
            dispatch(setUser(meQuery.data))
        }
    }, [meQuery.data, user, dispatch])


    return {
        user,
        token,
        isAuthenticated,

        login,
        register,
        logout,

        isLogginIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
        isFetchingUser: meQuery.isLoading,

        loginError: loginMutation.error,
        registerError: registerMutation.error,
    }
}