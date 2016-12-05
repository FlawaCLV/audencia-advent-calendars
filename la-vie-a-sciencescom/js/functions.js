function getCSSClass(day) {
  var date = new Date();
  var currentDay = date.getDate();

  if (day < currentDay) {
    return 'jour-passe';
  } else if (day == currentDay) {
    return 'jour-j';
  }

  return 'jour-futur';
}
