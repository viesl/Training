function getInfo(paramOne, paramTwo) {
    if (typeof paramOne === 'number') {
        console.log('Id:', paramOne);
    }
    else if (typeof paramTwo != 'undefined') {
        console.log('Email:', paramOne, ', Name:', paramTwo);
    }
    else {
        console.log('Email:', paramOne);
    }
}
getInfo(1);
getInfo('name@mail.com');
getInfo("name@mail.com", 'EMI');
