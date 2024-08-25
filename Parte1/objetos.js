var rotina ={
    'segunda' :'Matemtica',
    'terça' :'Portugues',
    'quarta': 'hacking'
}
console.log(rotina)
//Objeto retornará uma matriz de strings
console.log(Object.keys({x :0, y :1, k :2}))


//copia todas as propriedades de um objeto para outro
let objetoX = {a:2, b:9}
Object.assign(objetoX, {b:8, c: 4})
console.log(objetoX)


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false  pois são objetos que ocupam lugares diferentes na memória, objetos em JavaScript verifica se eles são a mesma instância, ou seja, se ocupam o mesmo espaço na memória, e não apenas se seus conteúdos são iguais.


function phi(table) {
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
  // → Toronto
  console.log(city({name: "Vera"}));
  // → undefined

  console.log("string".notAMethod?.());
  // → undefined
  console.log({}.arrayProp?.[0])
 

