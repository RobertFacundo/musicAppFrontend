import type React from "react";

export type AuthMode = 'login' | 'register';

interface AuthFormProps {
    mode: AuthMode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    register: any;
    isLoading?: boolean;
    error?: string;
}

const AuthForm = ({
    mode,
    onSubmit,
    register,
    isLoading = false,
    error,
}: AuthFormProps) => {
    return (
        <form onSubmit={onSubmit}>
            {mode === 'register' && (
                <div>
                    <label>Username</label>
                    <input type="text" {...register('username')} placeholder='Username' />
                </div>
            )}

            <div>
                <label>Email</label>
                <input type="email" {...register('email', { required: true })} placeholder='Email' />
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register('password', { required: true })} placeholder='Password' />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type='submit' disabled={isLoading}>
                {isLoading
                    ? 'Loading'
                    : mode === 'login'
                        ? 'Login'
                        : 'Register'
                }
            </button>
        </form>
    )
};

export default AuthForm;