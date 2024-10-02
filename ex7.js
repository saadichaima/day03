function createCity(country, cityName) {
    country.push([cityName, []]);
}

function createHousing(country, cityName, housingName) {
    let i = 0; 
    while (i < country.length) {
        if (country[i][0] === cityName) {
            country[i][1].push([housingName, []]); 
   
        }
        i++; 
    }
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    for (let i = 0; i < country.length; i++) {
        if (country[i][0] === cityName) {
            for (let j = 0; j < country[i][1].length; j++) {
                if (country[i][1][j][0] === housingName) {
                    country[i][1][j][1].push(...characteristics); 
                    return; 
                }
            }
        }
    }
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    for (let i = 0; i < country.length; i++) {
        if (country[i][0] === cityName) {
            for (let j = 0; j < country[i][1].length; j++) {
                if (country[i][1][j][0] === housingName) {
                    return country[i][1][j][1];
                }
            }
        }
    }
    return []; 
}

let country = [];
createCity(country, "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country, "Nantes", "Apartment1", "100 m2", "2 bathrooms", "Red paint", "14 rue Arthur III");

console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1")); 

console.log(country); 
