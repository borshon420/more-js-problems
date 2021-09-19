const phones = [
    {name: 'Samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'shaomi a2', price: 25000, camera: 8, storage: 8},
    {name: 'nokia ac1', price: 5000, camera: 8, storage: 8},
    {name: 'oppo a2', price: 18000, camera: 8, storage: 8},
    {name: 'htc cc4', price: 17000, camera: 8, storage: 8}
]

let cheapest = phones[0];
for(let phone of phones) {
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
    console.log(phone);
}