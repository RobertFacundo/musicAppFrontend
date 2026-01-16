import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';
import type { AuthMode } from '../components/AuthForm';
import type { RegisterDTO, LoginDTO } from '../types';
import { useNavigate } from 'react-router-dom';

interface AuthFormValues {
    username?: string;
    email: string;
    password: string;
}

export const useAuthForm = (mode: AuthMode) => {
    const { register, handleSubmit } = useForm<AuthFormValues>();
    const navigate = useNavigate();

    const {
        login,
        register: registerUser,
        isLogginIn,
        isRegistering,
        loginError,
        registerError,
    } = useAuth();

    const onSubmit = async (data: AuthFormValues) => {
        try {
            if (mode === 'login') {
                const payload: LoginDTO = {
                    email: data.email,
                    password: data.password,
                };

                await login(payload)
            }

            if (mode === 'register') {
                const payload: RegisterDTO = {
                    username: data.username!,
                    email: data.email,
                    password: data.password,
                };

                await registerUser(payload);
            }

            navigate('/profile')
        } catch (err) {
            console.error(err)
        }
    };

    return {
        register,
        onSubmit: handleSubmit(onSubmit),

        isLoading: mode === 'login' ? isLogginIn : isRegistering,
        error:
            mode === 'login'
                ? loginError?.message
                : registerError?.message,
    };
};