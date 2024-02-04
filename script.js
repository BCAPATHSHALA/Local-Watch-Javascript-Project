const time = document.querySelector(".time");
const localDate = document.querySelector(".date");
const localDay = document.querySelector(".day");

// Function for return days
const gettingDay = (val) => {
  switch (val) {
    case 0:
      return "SUNDAY";
      break;
    case 1:
      return "MONDAY";
      break;
    case 2:
      return "TUESDAY";
      break;
    case 3:
      return "WEDNESDAY";
      break;
    case 4:
      return "THURSDAY";
      break;
    case 5:
      return "FRIDAY";
      break;
    case 6:
      return "SATURDAY";
      break;
  }
};

setInterval(() => {
  const date = new Date();
  time.textContent = date.toLocaleTimeString();
  localDate.textContent = date.toLocaleDateString();
  localDay.textContent = gettingDay(date.getDay());
}, 1000);
