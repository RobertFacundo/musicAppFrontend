import { render, screen, fireEvent } from '@testing-library/react';
import AuthView from './AuthView';
import { describe, it, vi, expect } from 'vitest';

vi.mock('./hooks/useAuthForm', () => ({
    useAuthForm: () => ({
        register: vi.fn(),
        onSubmit: vi.fn(),
        isLoading: false,
        error: undefined,
    })
}))

vi.mock('./components/AuthForm', () => ({
    default: ({ mode }: { mode: 'login' | 'register' }) => (
        <div data-testid='auth-form'>AuthForm - {mode}</div>
    )
}));

describe('AuthView', () => {
    it('renders login view by default', () => {
        render(<AuthView />)

        expect(
            screen.getByRole('heading', { name: /login/i })
        ).toBeInTheDocument()

        expect(
            screen.getByText(/no tenes cuenta\?/i)
        ).toBeInTheDocument()

        expect(
            screen.getByTestId('auth-form')
        ).toHaveTextContent('login')
    })

    it('switches to register mode when clicking toggle button', () => {
        render(<AuthView />)

        const toggleButton = screen.getByText(/no tenes cuenta\?/i)
        fireEvent.click(toggleButton)

        expect(
            screen.getByRole('heading', { name: /register/i })
        ).toBeInTheDocument()

        expect(
            screen.getByText(/ya tenes cuenta\?/i)
        ).toBeInTheDocument()

        expect(
            screen.getByTestId('auth-form')
        ).toHaveTextContent('register')
    })
})

