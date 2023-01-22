function getFullNames(firstNames, lastNames) {
    const fullNames = [];
  
    for (let i = 0; i < firstNames.length; i++) {
      const fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
      fullNames.push(fullName);
    }
    return fullNames;
  }

const firstNames = ["Bob", "Jill"];
const lastNames = ["Gregory", "Wurtz"];

const fullNames = getFullNames(firstNames, lastNames);
console.log(fullNames); 