import { Gift, Button } from '@/shared';

export const Gifts = () => {
    return (
        <div className="w-[350px] mt-20 shadow rounded-3xl pt-5 pl-8">
            <p className="font-bold">Учитесь бесплатно</p>
            <p className="font-thin pr-5 pb-2">Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
            <div className="flex flex-row items-center justify-between gap-10">
                <Button variant="blue">Узнать</Button>
                <img src={Gift} className="rounded-3xl" alt="gift" />
            </div>
        </div>
    );
};
