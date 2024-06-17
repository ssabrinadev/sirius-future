import { apiService } from '@/shared';
import type { TAuthResponse } from '@/entities';
import type { TLoginFormUI, TRegistrationFormUI } from '@/entities/auth/ui';

export const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<TAuthResponse, TLoginFormUI>(({
      query: (body) => ({
        url: '/auth',
        method: 'POST',
        body,
      }),
    })),
    registerUser: build.mutation<TAuthResponse, Partial<TRegistrationFormUI | undefined>>(({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    })),

  }),
});

export const useLogin = authApi.useLoginUserMutation;
export const useRegister = authApi.useRegisterUserMutation;
