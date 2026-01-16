import type React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import AuthInput from "./AuthInput";

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
        <motion.form
            layout
            onSubmit={onSubmit}
            className="space-y-4 dark:text-white"
        >
            <AnimatePresence>
                {mode === 'register' && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <AuthInput
                            label="Username"
                            type="text"
                            placeholder="Write your Username"
                            name="username"
                            register={register}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <AuthInput
                label="Email"
                type="Email"
                placeholder="Email"
                name="email"
                register={register}
            />

            <AuthInput
                label="Password"
                type="password"
                placeholder="... and your Password"
                name="password"
                register={register}
            />

            {error && <p className="text-sm text-[#FA3433] font-medium">{error}</p>}

            <button
                type='submit'
                disabled={isLoading}
                className="
                    mt-4 w-full py-2 rounded-xl text-2xl font-semibold text-black
                    bg-gradient-to-r from-[#F9D52F] to-[#FD7258]
                    hover:from-[#FCB425] hover:to-[#FA3433]
                    transition-all
                    disabled:opacity-50
                    cursor-pointer
                ">
                {isLoading
                    ? 'Loading'
                    : mode === 'login'
                        ? 'Login'
                        : 'Register'
                }
            </button>
        </motion.form>
    )
};

export default AuthForm;