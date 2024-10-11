// Write your function here... 
function findAddresses(toFind){
    addresses.forEach(address => {
       const theAddress = address.join(', ');
        if (theAddress.includes(toFind)) { 
            console.log(theAddress);
    }});

}
addresses = [["45 avenue des tulipes", "92130 Issy-les-Moulineaux"], ["95 avenue parmentier", "75011 Paris"], ["24 Rue Pasteur", "92400 Courbevoie"], ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"], ["Pl. Louis-Armand", "75571 Paris"]];

findAddresses ("Paris") ;
