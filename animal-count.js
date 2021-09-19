function animalCount(miles) {
    const first10PerMile = 10;
    const second10PerMile = 50;
    if(miles <= 100) {
        const count = miles * 100;
        return count;
    }
    else if(miles <= 200) {
        const first10 = 10 * first10PerMile;
        const restMiles = miles - 10;
        const second10 = restMiles * second10PerMile;
        const totalAnimals = first10 + second10;
        return totalAnimals;
    }
}

const animals = animalCount(20);
console.log(animals);

// let sum=0; 
// for( let i = 0; i<=3;i++){
//      sum = sum + i; }
//      console.log(sum);

// var arr = [1, 2, 3];
// arr[arr.length-1] = 5;
// console.log(arr);

// var name = 'Borshon';
// var num = 25;
// var token = true;
// let name = 'borshon';
// name = 'arafat';
// console.log(name);
// var num1 = 30;
// var num2 = 30;
// var num3 = 20;
// var num4 = 10;
// var num5 = 5;
// var num6 = 15;
// var total = num1 % num2;
// console.log(total);
// if((num1 == num2 && num3 == num4) || num5 == num6) {
//      console.log('yes');
// }
// else {
//     console.log('no');
// }

// let i = 7;
// while(i <= 19) {
//     if(i % 2 == 1) {
        
//         console.log(i);
//         i++;
//     }
// }