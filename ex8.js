// Your code here...

function houseEnergyScore(housingList) {
    const grade = (consumption) => {
        if (consumption >= 450) return 'G';
        if (consumption >= 330) return 'F';
        if (consumption >= 230) return 'E';
        if (consumption >= 150) return 'D';
        if (consumption >= 90) return 'C';
        if (consumption >= 51) return 'B';
        return 'A'; 
    };

    for (let i = 0; i < housingList.length; i++) {
        for (let j = 0; j < housingList.length - 1 - i; j++) {
            if (housingList[j][1] > housingList[j + 1][1]) {
                const temp = housingList[j];
                housingList[j] = housingList[j + 1];
                housingList[j + 1] = temp;
            }
        }
    }

    const result = [];

    for (let i = 0; i < housingList.length; i++) {
        const housing = housingList[i];
        result.push([housing[0], housing[1], grade(housing[1])]);
    }

    return result;
}







// This lines will display the result for you
if (typeof houseEnergyScore === "function") {
	const scores = [["Hutch", 30],["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
	const result = houseEnergyScore(scores);
	displayResult(result);
}
console.log(houseEnergyScore(scores));
