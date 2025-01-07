let date = new Date();
// console.log(week);
let day1;
switch (date.getDay()) {
    case 1:
        day1 = 'Monday';
        break;
    case 2:
        day1 = 'Tuesday';
        break;
    case 3:
        day1 = 'wed';
        break;
    case 4:
        day1 = 'thr';
        break;
    case 5:
        day1 = 'fri';
        break;
    case 6:
        day1 = 'sat';
        break;
    case 7:
        day1 = 'sun';
        break;
    default:
        day1 = 'Undefine'
        break;
}
console.log(day1);
