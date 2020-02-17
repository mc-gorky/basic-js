module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let coolName = members.map(function(item, index){
      if (typeof item == 'string') {
        item = item.trim();
        return item[0].toUpperCase();
      }
  })

  return coolName.sort().join('');
};