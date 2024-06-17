import { classes, date, Button, time, users, month, Profile } from '@/shared';

export const NextLesson = () => {
  return (
    <div className="border border-primary-purple-400 relative w-[820px] p-6 rounded-3xl">
      <p className="text-xl font-bold mb-4">Ближайшие уроки</p>
      <table className="w-full">
        <tbody>
          {date.map((dateItem, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2">
                <p className="text-[32px]">{dateItem}</p>
                <p className="py-2">{month[index]}</p>
              </td>
              <td className="px-2">{classes[index]}</td>
              <td className="px-4 whitespace-nowrap">{time[index]}</td>
              <td className="">
                <div className="flex gap-1 items-center">
                  <img src={Profile} alt="" />
                  <p className="py-4 font-thin">{users[index]}</p>
                </div>
              </td>
              <td className="flex gap-2 py-2">
                <Button variant="outline">Button</Button>
                <Button variant="secondary">Button</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <Button variant="lightPurple">Button</Button>
      </div>
    </div>
  );
};
