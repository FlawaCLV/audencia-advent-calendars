function getcssclass(day){
  var date = new Date();
  var currentDay = day.getDate();
  if (day < currentDay){
    return 'jourpasse'
  } else if (day === currentDay) {
    return 'jourJ'
  }
}
{
return 'jour'
}
