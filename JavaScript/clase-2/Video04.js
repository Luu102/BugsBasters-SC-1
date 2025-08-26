//arreglos 

//let autos = new Array('BMW', 'Audi', 'Volvo');
const autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
///recorrer un arreglo
console.log(autos[0]);


for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}
//modificar un elemento del arreglo
autos[1] = 'Mercedes Benz';
console.log(autos[1]);
//agregar un elemento al arreglo
autos.push('Audi');
console.log(autos);
//otra forma de agregar un elemento al arreglo
autos[autos.length] = 'Cadillac';   
console.log(autos);
// Como preguntar si es un arreglo
console.log(Array.isArray(autos));
//preguntamos si la instancia es un arreglo
console.log(autos instanceof Array);