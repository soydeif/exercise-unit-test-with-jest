// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen =function(valueInDollar){
    let valueInYen = valueInDollar * 127.9; //toma el valor del euro * el valor en dolares (funcion) * el valor en yenes
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return Number(valueInPound.toFixed(1));
}


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};
