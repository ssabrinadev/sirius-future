import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button, Input, Modal, cn, colors } from '@/shared';
import type { SchedulerUIModalProps } from './types';
import { TSchedulerType } from '../..';

export const SchedulerModalUI: FC<SchedulerUIModalProps> = ({
  visible,
  loading,
  onClose,
  onSubmit,
}) => {
  const [scheduler, setScheduler] = useState<Partial<TSchedulerType>>({
    color: '#D7F0D6',
  });

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScheduler((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(scheduler as TSchedulerType);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setScheduler({});
    onClose(false);
  };

  return (
    <Modal title="Создать напоминание" visible={visible} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          name="title"
          value={scheduler?.title || ''}
          onChange={handleUpdate}
          placeholder="Название"
          required
        />
        <Input
          label="От"
          type="time"
          name="timeFrom"
          value={scheduler?.timeFrom || ''}
          onChange={handleUpdate}
          required
        />
        <Input
          label="До"
          type="time"
          name="timeTo"
          value={scheduler?.timeTo || ''}
          onChange={handleUpdate}
          required
        />
        <Input
          name="description"
          value={scheduler?.description || ''}
          onChange={handleUpdate}
          placeholder="Описание"
          required
        />
        <div className="flex items-center gap-4">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={cn('rounded-full w-8 h-8 cursor-pointer', {
                'ring-4 ring-offset-2 ring-primary-purple-300':
                  scheduler.color === color,
              })}
              onClick={() => setScheduler((prev) => ({ ...prev, color }))}
              tabIndex={1}
            />
          ))}
        </div>
        <Button type="submit" disabled={loading}>
          Сохранить
        </Button>
      </form>
    </Modal>
  );
};
