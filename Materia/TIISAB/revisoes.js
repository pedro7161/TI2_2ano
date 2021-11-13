$(function () {
  $("#menu").load("menu.html");
});

const fatorial = function (n) {
  let acum = 1;
  while (n > 1) acum *= n--;
  return acum;
};

// function inicia(base) {
//   let i = base;
//   return {
//     inc: function (p) {
//       i += p;
//     },
//     valor: () => i,
//   };
// }

// var x = inicia(1000);
// x.inc(2);
// console.log(x.valor());
// x.inc(1);
// x.inc(1);
// x.inc(1);
// x.inc(1);
// console.log(x.valor());

// //closure

// // const triplo = (a) => 3 * a;
// console.log(triplo(3));

// const cumprimenta = (palavra) => {
//   console.log(palavra);
// };

// cumprimenta("Boa Tarde");

//const cumprimenta=
// aluno = {
//   num: 1,
//   nome: "Tio Patinhas",
//   fala: function (idade) {
//     console.log("Owner" + this);
//     console.log("Chamo-me " + this.nome + " e tenho " + idade);
//   },
// };

// aluno.fala(15);

// const dobro = function (x) {
//   console.log("this:", this);
//   return 2 * x;
// };
// console.log(dobro(2));

// function soma() {
//   console.log("this:" + this);
//   try {
//     let total = 0;
//     for (i = 0; i < arguments.length; i++) {
//       total += parseInt(arguments[i]);
//     }
//     return total;
//   } catch (error) {
//     alert(error);
//   } finally {
//   }
// }
//console.log(soma(2, 3, 1000, 67));

// var a = 1;
// console.log("a:" + a + " " + typeof a);

// b = "1";
// console.log("b:" + b + " " + typeof b);
// console.log(a == b);
// console.log(a === b);
// console.log("isNaN(b)" + isNaN(b));

// c = true;
// console.log("c:" + c + " " + typeof c);

// d = null;
// console.log("d:" + d + " " + typeof d);

// var e;
// console.log("e:" + e + " " + typeof e);

// f = [1, 3, 4];
// console.log("f:" + f.join("-") + " " + typeof f);
// const g = Array("a", 45, 3.6);
// console.log("g:" + g.join("-") + " " + typeof g);

// const h = function (a, b) {
//   return a * b;
// };
// console.log(
//   "h:" + h(2, 3).toString() + " " + typeof h + "    prototype:" + h.prototype
// );

// const aluno = { num: 12, nome: "Zé Carioca" };
// console.log(aluno);
// aluno.num = 333;
// console.log(aluno);

// var idade = Symbol("idade");
// console.log("idade:" + typeof idade);
// aluno[idade] = 23;
// console.log(aluno);

// for (item of Object.entries(aluno)) {
//   console.log(item);
// }

// for (k of Object.keys(aluno)) console.log(k + "->" + aluno[k]);

// for (v of Object.values(aluno)) console.log(v);

// console.log(aluno["num"]);
// console.log(aluno.nome);
// console.log("----------------------------------------");
// Object.entries(aluno).forEach(function (v) {
//   console.log(v);
// });

// Object.entries(aluno).forEach(([k, v]) => {
//   console.log(k + "->" + v);
// });
