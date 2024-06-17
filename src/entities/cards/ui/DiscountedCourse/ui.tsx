import { Sale } from '@/shared';

export const DiscountedCourse = () => {
  return (
    <div className="bg-primary-purple-400 w-[526px] text-white rounded-3xl pl-8 flex justify-between cursor-pointer items-center">
      <div className="">
        <p className="text-[32px]">До 31 декабря любой курс со скидкой 20%</p>
        <p className="font-thin ">До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
      </div>
      <img src={Sale} alt="sale" className="rounded-3xl" />
    </div>
  );
};
