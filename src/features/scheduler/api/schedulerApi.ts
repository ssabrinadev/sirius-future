import { apiService } from '@/shared';
import type { TSchedulerType } from '@/entities';

export const schedulerApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getScheduler: build.query<TSchedulerType[], { user_id: number | symbol }>(({
      query: (params) => ({
        url: '/scheduler',
        params,
      }),
      providesTags: ['scheduler'],
    })),
    saveScheduler: build.mutation<TSchedulerType, TSchedulerType & { user_id: number }>(({
      query: (body) => ({
        url: '/scheduler',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['scheduler'],
    })),
    updateScheduler: build.mutation<TSchedulerType, TSchedulerType & { user_id: number }>(({
      query: (body) => ({
        url: `/scheduler/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['scheduler'],
    })),
  }),
});

export const useGetScheduler = schedulerApi.useGetSchedulerQuery;
export const useSaveScheduler = schedulerApi.useSaveSchedulerMutation;
export const useUpdateScheduler = schedulerApi.useUpdateSchedulerMutation;
