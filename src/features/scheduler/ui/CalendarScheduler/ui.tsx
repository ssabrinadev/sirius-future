import {
  CalendarSchedulerUI,
  TSchedulerType,
  getSchedulerDay,
} from '@/entities/scheduler';
import { useGetScheduler, useSaveScheduler, useUpdateScheduler } from '../..';
import { toast } from 'react-toastify';
import { useAppSelector, useAuth } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';

export const CalendarScheduler = () => {
  const { user } = useAuth();
  const [saveScheduler, { isLoading }] = useSaveScheduler();
  const [updateScheduler, { isLoading: updateLoading }] = useUpdateScheduler();
  
  const { data: scheduler } = useGetScheduler({
    user_id: user?.data.id ?? skipToken,
  });
  const createdAt = useAppSelector(getSchedulerDay);

  const handleSubmit = async (value: TSchedulerType) => {
    try {
      const { data } = await saveScheduler({
        ...value,
        createdAt: createdAt?.toISOString(),
        user_id: user?.data.id ?? 0,
      });

      if (!data) {
        toast.warn('Oops Something went wrong!');
        return;
      }

      toast.success('Scheduler saved successfully');
    } catch (error) {
      toast.error(error?.message || 'Error saving scheduler');
    }
  };

  const handleUpdate = async (value: TSchedulerType) => {
    try {
      const { data } = await updateScheduler({
        ...value,
        createdAt: createdAt?.toISOString(),
        user_id: user?.data.id ?? 0,
      });

      if (!data) {
        toast.warn('Oops Something went wrong!');
        return;
      }

      toast.success('Scheduler saved successfully');
    } catch (error) {
      toast.error(error?.message || 'Error saving scheduler');
    }
  };

  return (
    <>
      <CalendarSchedulerUI
        scheduler={scheduler || []}
        loading={isLoading ?? updateLoading}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}
      />
    </>
  );
};
