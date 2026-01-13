import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { useAuthForm } from "./hooks/useAuthForm";

const AuthView = () => {
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const { register, onSubmit, isLoading, error } = useAuthForm(mode);

    return (
        <div>
            <h1>{mode === 'login' ? 'login' : 'register'}</h1>

            <AuthForm
                mode={mode}
                register={register}
                onSubmit={onSubmit}
                isLoading={isLoading}
                error={error}
            />

            <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                {mode === 'login'
                    ? 'No tenes cuenta? Registráte'
                    : 'Ya tenes cuenta? Iniciá sesion'
                }
            </button>
        </div>
    )
};

export default AuthView;