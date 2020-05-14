var BikeType;
(function (BikeType) {
    BikeType["Sports"] = "SPORTS";
    BikeType["Chopper"] = "CHOPPER";
    BikeType["Scooter"] = "SCOOTER";
})(BikeType || (BikeType = {}));
function getBike(bikeName) {
    if (bikeName === 'Harley') {
        return BikeType.Chopper;
    }
    else if (bikeName === 'Suzuki') {
        return BikeType.Sports;
    }
    return BikeType.Scooter;
}
console.log('Harley -', getBike('Harley').toString());
console.log('Suzuki -', getBike('Suzuki').toString());
console.log('Other -', getBike('Other').toString());
