function fillBus(peopleAtBusStops, busSeats){
    somme=0;
    i=0;
    while (somme<busSeats){
    somme+=peopleAtBusStops[i];
    i++;
    }
    return i;
    }
    console.log(fillBus([1, 3, 10, 1], 12));
