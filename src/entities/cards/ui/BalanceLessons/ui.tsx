import { CircleButton, classes, num, Button } from '@/shared';

export const BalanceLessons = () => {
  return (
    <div className="border border-primary-purple-400 h-[400px] w-[400px] p-6 rounded-3xl">
      <p className="text-xl font-bold mb-4">Баланс занятий</p>
      <div className="space-y-4">
        {classes.map((className, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-b-primary-purple-100"
          >
            <p className="text-lg text-primary-purple-600">{className}</p>
            <CircleButton className="mb-2">{num[index]}</CircleButton>
          </div>
        ))}
          <Button variant="lightPurple">
              Button
          </Button>
      </div>
    </div>
  );
};
