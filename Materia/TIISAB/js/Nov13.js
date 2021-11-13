$(function () { $("#menu").load("menu.html") });
console.log(soma(4, 5));
function soma() {
    let soma = 0;
    for (i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}
function pot(b, e) {
    if (e == 0) return 1;
    return b * pot(p,e - 1)
}
function incre(){
    x+=1;
    return x;
}
function repe(a,count){
for(k=0;k<=count;k--)console.log(a);
}
var l=function(){
    let i=0;
    return{
        inc:function(){i=i+1;},
        valor:function(){return i;},
        };
};
function dobroo(x){ 
    setTimeout(()=>{
        if (typeof x === undefined)x=0;
    return 2*x;
    },2000)
   
}
function xxx(x){
    return new Promise((resolve,reject)=>{setTimeout(()=>{if (x%2==0)resolve(x);else reject(x)}),2000;});
}
function demora(x){
    new Promise((resolve,reject)=>{setTimeout(() => {
        resolve(x*2);
    }, 1000);})
}
async function multiply(x){
let r=await demora(x);
console.log(r);
}
let y;
var x=xpto;
repe(incre,5);
console.log(x.valor());
repe(x.incre,5);
const dobro = (a) => 2 * a;
console.log(dobro(3));
console.log(pot(2, 2));
y=dobroo(y)
console.log(y)
console.log(xxx(4).then((z)=>{y=z;console.log("resolve" + y)}).catch((z)=>{y=z;console.log("reject" + y)}));
console.log(xxx(3).then((z)=>{y=z;console.log("resolve" + y)}).catch((z)=>{y=z;console.log("reject" + y)}));
console.log(multiply(3));