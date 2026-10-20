//const dble=(a)=>a*2;
//console.log(dble(2));
const clacul=(p,taux)=>p*taux;
const calcul2=(p)=>{
    if(p>100) 
        return 0.1*p
    else
        return 0.05*prix
}
const calcul3=(p)=>p > 100 ? 0.1*p : 0.05*p;
console.log(calcul(100,0.2));
console.log(calcul2(100));
console.log(calcul3(100));


#boucles

const fruitsRouges = ["fraise", "fremboise", "cerise"];
for(let fruit of fruitsRouges){
    console.log("La ${fruit} c'est bon !");
}
fruitsRouges.forEach(fruit =>
    console.log("LA ${fruit} c'est bon");
)
const nombre=[12,3,4,10];
let doubles=nombres.map(n => n * 2)
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2));
let paires=nombres.filter(n=>n%2==0)
console.log(paires);
#destructuring
#Object
#spred