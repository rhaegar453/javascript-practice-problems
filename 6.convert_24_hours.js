const inputs = ["12:10AM", "5:49AM", "12:10PM", "1:10PM", "10:10PM"];

const convert24Hours = (input) => {
  let result = [];
  for (let i of input) {
    let time = i.split(":");
    let hours = Number(time[0]);
    let minutes = Number(time[1].slice(0, 2));
    let amPm = time[1].slice(2, 4);
    if (amPm === "PM") {
      if (hours == 12) {
        result.push(`00:${minutes}`);
      }
      result.push(`${hours + 12}:${minutes}`);
    } else {
      result.push(`${hours}:${minutes}`);
    }
  }
  return result;
};

console.log(convert24Hours(inputs));
