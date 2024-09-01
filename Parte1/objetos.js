
// objeto
let rotina ={
    'segunda' :'Fazer compras',
    'terça' :'Ir ao mercado',
    'quarta': ' Estudar hacking'
}
console.log(rotina)

console.log(Object.keys({x :0, y :1, k :2})) // retorna um array, 


let objetoX = {a:2, b:9}
Object.assign(objetoX, {b:8, c: 4}) //copia as propriedades do objeto
console.log(objetoX)


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); //true

console.log(object1 == object3); // false . pois é uma instância separada, oculpa outra parte da mémoria.

// função que calcula o coeficiente de correlação do pi
function phi(table) {

  //A função recebe como argumento um array table com 4 valores
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }


  function city(object) {
    return object.address?.city;
  }
  console.log(city({address: {city: "Toronto"}}));
  
  console.log(city({name: "Vera"}));
  
  console.log("string".notAMethod?.());
  
  console.log({}.arrayProp?.[0])
 

