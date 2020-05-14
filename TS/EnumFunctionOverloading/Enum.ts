enum BikeType {
    Sports = "SPORTS",
    Chopper = "CHOPPER",
    Scooter= "SCOOTER"
}

function getBike(bikeName: string): BikeType {
    if ( bikeName === 'Harley') {
        return BikeType.Chopper;
    }
    else if (bikeName === 'Suzuki') {
        return BikeType.Sports;
    }
    return BikeType.Scooter;
 }

console.log('Harley -',getBike('Harley').toString());
console.log('Suzuki -',getBike('Suzuki').toString());
console.log('Other -',getBike('Other').toString());