const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity != 'string') {
    return false;
  }
  
  let sample = parseFloat(sampleActivity);
 
 
    if (isNaN(sample) || sample > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
};
