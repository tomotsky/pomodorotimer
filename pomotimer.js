const TIMES = 3;

const workTime = 25;
const breakTime = 5;

function workFunc() {
  console.log('Working! Studying! Attention!!!');
}

function breakFunc() {
  console.log('...Coffee break, relax...');
}

function endFunc() {
  console.log('Time up.');
}

function maketime() {
  let addTime = 0;
  let timesheet = [];
  timesheet.push([workFunc, addTime]);

  for (i = 1; i < TIMES; i++) {
    addTime = addTime + workTime;
    timesheet.push([breakFunc, addTime]);
    addTime = addTime + breakTime;
    timesheet.push([workFunc, addTime]);
  }
  addTime = addTime + workTime;
  timesheet.push([endFunc, addTime]);

  return timesheet;
}

function setTime() {
  const timesheet = maketime();
  // console.log(timesheet);

  for (let arr of timesheet) {
    setTimeout(arr[0], arr[1] * 1000) 
  }
}

setTime();
