export const convertDateToDayOfWeek = dateString => {
  const monthName = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const dayName = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ];
  let [date, month, year] = dateString.split("/");
  date = parseInt(date);
  month = parseInt(month) - 1;
  year = parseInt(year);
  const day = getDayOfWeek(date, month, year);
  return `วัน${dayName[day]}ที่ ${date} ${monthName[month]} ${year + 543} `;
};

const getDayOfWeek = (date, month, year) => {
  const mkeys = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
  let day = 0;

  day = year - 1900 + (year - 1900) / 4 + mkeys[month] + date - 1;
  if (year > 1900 && year % 4 === 0 && month < 2) day--;
  day %= 7;
  return parseInt(day);
};
