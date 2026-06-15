function soma (x,y){
    let calculo=(x+y)
    console.log("O resultado do calculo é :",calculo)
}
function subtracao (x,y){
    let calculo=(x-y)
    console.log("O resultado do calculo é :",calculo)
}
function multiplicacao (x,y){
    let calculo=(x*y)
    console.log("O resultado do calculo é :",calculo)
}
function divisao (x,y){
    let calculo=(x/y)
    console.log("O resultado do calculo é :",calculo)
}
module.exports={
    soma:soma
    subtracao:subtracao
    multiplicacao:multiplicacao
    divisao:divisao
}
