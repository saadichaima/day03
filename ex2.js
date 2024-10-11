function findHousing(housingToFind, housingList) {
    i = 0; 
    while (i < housingList.length) {
       
        if (housingList[i].toLowerCase() === housingToFind.toLowerCase()) {
            return [i, housingToFind]; 
        }
        i++; 
    }
    return null;
}

// Use console.log to debug your code! It is very useful
console.log("I'm debugging");



displayResult(findHousing("Flat", ["Flat", "House", "Hut", "House", "Igloo"]));
