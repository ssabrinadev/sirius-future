import { Button } from '@/shared';

export const UpcomingLessons = () => {
    return (
        <div className="bg-secondary-orange-200 w-[400px] h-72 rounded-3xl">
            <div className="flex justify-center items-center">
                <p className="text-xl mt-7 text-center w-56 text-primary-purple-600 ">Следующее занятие начнется через:</p>
            </div>
            <div className="flex mt-7 justify-center">
                <p className="text-4xl">6 <span className="text-lg">д</span> 12 <span className="text-lg">ч</span> 24 <span className="text-lg">мин</span></p>
            </div>
            <div className="flex justify-center my-7">
                <Button variant="dashed">Button</Button>
            </div>
        </div>
    );
};
