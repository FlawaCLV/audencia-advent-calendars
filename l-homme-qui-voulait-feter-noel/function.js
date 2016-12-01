function getCSSClass(day) {
  var date = new Date();
  var currentDay = date.getDate();

  if (day < currentDay) {
    return 'jourpasse';
  } else if (day == currentDay) {
    return 'jourJ';
  }

  return 'jour-futur';
}
