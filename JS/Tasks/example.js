function add(a,b=2) {
    return a + b;
}

function display(c=2,d=3,addition=add(c,d))
{
    return [c,addition];
}

console.log(display(2,6));
