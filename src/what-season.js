module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (date.getTime() != date.getTime()) {
    throw new Error();}

  let monthNumber = date.getMonth();
  if (monthNumber <= 1 || monthNumber == 11){
    return "winter"
  }

  if (monthNumber >= 2 && monthNumber <= 4){
    return "spring"
  }

  if (monthNumber >= 5 && monthNumber <= 7){
    return "summer"
  }

  return "autumn"
};
