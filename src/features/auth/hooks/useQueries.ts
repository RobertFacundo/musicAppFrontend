import { useMutation, useQuery } from '@tanstack/react-query';
import { authService } from '../services/auth.service';
import type { RegisterDTO, LoginDTO } from '../types';

export const useRegister = () =>
    useMutation({
        mutationFn: (data: RegisterDTO) => authService.register(data),
    });


export const useLogin = () =>
    useMutation({
        mutationFn: (data: LoginDTO) => authService.login(data),
    });

export const useMe = () =>
    useQuery({
        queryKey: ['me'],
        queryFn: () => authService.getMe(),
        staleTime: 5 * 60 * 1000,
        retry: false
    });
