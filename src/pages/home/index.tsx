import { BalanceLessons, DiscountedCourse, NextLesson, UpcomingLessons } from '@/entities/cards/ui';

const Home = () => {
  return (
    <div className="relative">
      <div className="flex flex-row gap-5 my-5">
        <DiscountedCourse />
        <UpcomingLessons />
      </div>
      <div className="flex gap-4">
        <BalanceLessons />
        <NextLesson />
      </div>
    </div>
  );
};

export default Home;
