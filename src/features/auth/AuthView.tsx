import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { useAuthForm } from "./hooks/useAuthForm";
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

const AuthView = () => {
    const { t } = useTranslation();
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const { register, onSubmit, isLoading, error } = useAuthForm(mode);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 shadow-xl p-8 border border-black/5 dark:border-white/10">
                <h1 className="text-3xl font-bold text-center mb-6 text-[#FCB425]">{mode === 'login' ? t('auth.login') : t('auth.register')}</h1>

                <AuthForm
                    mode={mode}
                    register={register}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                    error={error}
                />

                <button
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                    className="mt-2 w-full italic text-center text-[#FD7258] hover:text-[#FA3433] transition-colors cursor-pointer"
                >
                    {mode === 'login'
                        ? t('auth.noAccount?')
                        : t('auth.account?')
                    }
                </button>
            </motion.div>
        </div>
    )
};

export default AuthView;