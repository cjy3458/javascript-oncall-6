const getDaysInMonth = (month) => {
  const daysInMonth = new Date(2023, month, 0).getDate();
  const days = [];
  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(day);
  }

  return days;
};

export default getDaysInMonth;
