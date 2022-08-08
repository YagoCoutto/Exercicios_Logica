
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ErrorEvent('x e y precisam ser numeros');
    }
    return x + y
}

try{
    console.log(soma('5',5));
} catch(err){
    console.log('aqui rolou um err tratado')
    console.log(Error)
}