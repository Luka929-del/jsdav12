let age = Number(prompt('Enter your age: '));
let movie = prompt('Enter movie type (regular or 3D): ');
let time = prompt('Enter time of day (matinee or evening): ');
let discount = prompt('Do you have a discount ticket?: (Y/N)')

let ticket_price = 0;
switch(true) {
    case(age < 10):
        ticket_price = 5;
        break;
    case(age >= 10 && age <= 65):
        ticket_price = 15;
        break;
    case(age > 65):
        ticket_price = 10;
        break;
}
switch(true) {
    case(movie == "3D"):
        ticket_price += 5;
        break;
    case(movie == "regular"):
        break;
}
switch(true) {
    case(time == "evening"):
        ticket_price += 5;
        break;
    case(time == "matinee"):
        break;
}
if(discount == 'Y'){
    ticket_price *= 0.75;
}else{

}
alert(`ბილეთის ფასი თქვენთვის არის : ${ticket_price} ლარი`)