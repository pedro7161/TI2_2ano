$(function () {
    $("#menu").load("menu.html");
  
  $("#bt").click(function(evt){
      evt=evt?evt:window.event;
      evt.preventeDefault();
      alert(evt.target.id);
    
      selos($("$bt").val());
  });    
});
// console.log(soma(4, 5));
// function soma() {
//     let soma = 0;
//     for (i = 0; i < arguments.length; i++) {
//         soma += arguments[i];
//     }
//     return soma;
// }
// function pot(b, e) {
//     if (e == 0) return 1;
//     return b * pot(p,e - 1)
// }
// function incre(){
//     x+=1;
//     return x;
// }
// function repe(a,count){
// for(k=0;k<=count;k--)console.log(a);
// return 1
// }
// var l=function(){
//     let i=0;
//     return{
//         inc:function(){i=i+1;},
//         valor:function(){return i;},
//         };
// };
// function dobroo(x){ 
//     setTimeout(()=>{
//         if (typeof x === undefined)x=0;
//     return 2*x;
//     },2000)
   
// }
// function xxx(x){
//     return new Promise((resolve,reject)=>{setTimeout(()=>{if (x%2==0)resolve(x);else reject(x)}),2000;});
// }
// function demora(x){
//     new Promise((resolve,reject)=>{setTimeout(() => {
//         resolve(x*2);
//     }, 1000);})
// }
// async function primos(x){

// }
// async function multiply(x){
// let r=await demora(x);
// console.log(r);
// }
// var xpto=0;
// let y;
// var x=xpto;
// repe(incre,5);
// console.log(x.valor());
// repe(x.incre,5);
// const dobro = (a) => 2 * a;
// console.log(dobro(3));
// console.log(pot(2, 2));
// y=dobroo(y)
// console.log(y)
// console.log(xxx(4).then((z)=>{y=z;console.log("resolve" + y)}).catch((z)=>{y=z;console.log("reject" + y)})) ;
// console.log(xxx(3).then((z)=>{y=z;console.log("resolve" + y)}).catch((z)=>{y=z;console.log("reject" + y)}));
// console.log(multiply(3));

const selos = function(euros){
    let s5=0;
    let s3=0;
    let quo,r;
    if (euros >=8){
quo=Math.floor(euros.val()/8);
r=euros%8;
switch(r){
    case 0: s5=quo;s3=quo;break;
    case 1: s5=quo-1;s3=quo+3;break;
    case 2: s5=quo+1;s3=quo-1;break;
    case 3: s5=quo;s3=quo+1;break;
    case 4: s5=quo-1;s3=quo+3;break;
    case 5: s5=quo+1;s3=quo;break;
    case 6: s5=quo;s3=quo;break;
    case 7: s5=quo+2;s3=quo;break;

}
    }
    else{
        if (euros==3){s3=1;s5=0}
        else if(euros == 5){s3=0;s5=1}
        else if(euros == 6){s3=2;s5=0}
        else{s3=0;s5=0;$("#txtmsg"),val("quantia invalida");}

    }
    $("#txts3").val(s3);
    $("#txts5").val(s5);
}