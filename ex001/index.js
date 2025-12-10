const soma = (n1, n2)=>n1+n2;
const sub = (n1,n2)=>n1-n2;
const mult = (n1,n2)=>n1*n2;
const div = (n1,n2)=> n1/n2;
const MostraResultado = (n1,n2)=> {
    console.log(`[SOMA] entre ${n1} e ${n2} = ${soma(n1,n2)}`)
    console.log(`[SUBTRAÇÃO] entre ${n1} e ${n2} = ${sub(n1,n2)}`)
    console.log(`[MULTIPLICAÇÃO] entre ${n1} e ${n2} = ${mult(n1,n2)}`)
    console.log(`[DIVISÃO] entre ${n1} e ${n2} = ${div(n1,n2)}`)
}

MostraResultado(4,8)