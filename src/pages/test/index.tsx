import { CircleButton, Button, Select } from '@/shared';
import { DiscountedCourse, Gifts, UpcomingLessons } from '@/entities/cards/ui';
import { ProfileUi } from '@/entities/profile/ui';
import { ScheduleCard } from '@/shared/ui/Schedule';

const Test = () => {
    const options = [
        { value: '', label: 'Выбрать предмет' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    return (
        <div className="px-14 py-14">
            <Select options={options} />
            <CircleButton>
                4
            </CircleButton>
            <Button variant="lightPurple">
                Button
            </Button>
            <Button>
                Button
            </Button>
            <Button variant="secondary">
                Button
            </Button>
            <Button variant="outline">
                Button
            </Button>
            <Button variant="lightOutline">
                Button
            </Button>
            <Button variant="blue">
                Узнать
            </Button>
            <Gifts />
            <ScheduleCard time="13:00-13:45" description="Ментальная арифметика" icon={true}/>
            <ScheduleCard time="13:00-13:45" className="my-2" description="Ментальная арифметика" />
            <Button variant="lightPurple">Изменить расписание</Button>
            <DiscountedCourse />
            <UpcomingLessons />
        </div>
    );
};

export default Test;
