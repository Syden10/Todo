export const useDate = () => {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayName = daylist[day];

  const dayNumber = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const yearNumber = today.getFullYear();
  const fullDate = `${daylist[day]} ${month} ${dayNumber} of ${yearNumber}`;
  const dateNoYear = `${daylist[day]} ${dayNumber} of ${month} `;

  return {
    dayName,
    dayNumber,
    month,
    yearNumber,
    dateNoYear,
    fullDate,
  };
};
