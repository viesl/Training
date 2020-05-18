function getInfo(id: number): void;
function getInfo(email: string): void;
function getInfo(email: string, name: string): void; 

function getInfo (paramOne: string | number, paramTwo?: string ): void { 
 
    if( typeof paramOne === 'number') {
        console.log('Id:', paramOne);
    } else if( typeof paramTwo != 'undefined') {
        console.log('Email:', paramOne, ', Name:', paramTwo);
    } else {
        console.log('Email:', paramOne);
    }
} 

getInfo(1);
getInfo('name@mail.com');
getInfo("name@mail.com",'EMI');