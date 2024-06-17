import { FC } from 'react';
import { Modal } from '@/shared';
import type { SchedulerDetailsModalUIProps } from './types';

export const SchedulerDetailsModalUI: FC<SchedulerDetailsModalUIProps> = ({
  data,
  visible,
  onClose,
}) => {
  return (
    <Modal title={`Напоминание на ${data.timeFrom}`} visible={visible} onClose={onClose}>
      <dl className="flex flex-col gap-3">
        <div className="flex gap-2">
          <dt>Название</dt>
          <dd>{data.title}</dd>
        </div>
        <div className="flex gap-2">
          <dt>От:</dt>
          <dd>{data.timeFrom}</dd>
        </div>
        <div className="flex gap-2">
          <dt>До:</dt>
          <dd>{data.timeTo}</dd>
        </div>
        <div className="flex gap-2">
          <dt>Описание:</dt>
          <dd>{data.description}</dd>
        </div>
      </dl>
    </Modal>
  );
};
