const pays=["italie", "japan","grece", "espagne", "canada"];
const [p1,p2] = pays ;
console.log(p1,p2);
const [pn, ...reste] = pays
console.log(pn);
console.log(reste);
reste[0]="Tunisia";
console.log(reste);
console.log(pays);

const p22 = pays.map(p=>p);
p22[0] = "Tunisie";
console.log(p22);
console.log(pays);

const personne =[{nom:"ahmed", ville:"Bizerte", age:19},{nom:"samir", ville:"Tunisi",age:20},{nom:"nermine",ville:"nabeul", age:21}];
const {nom} = personne[0];
const {nom:identifiant} = personne[0];
console.log(identifiant);
const noms=personne.map(({nom})=>nom);
console.log(noms);
const nomage = personne.map(({nom,age}) => ({nom,age}));
console.log(nomage);
const nvpersonne = {nom:"hela", ville:"Bizerte", age:43};
const personne2 = [...personne,nvpersonne];
console.log(personne2);
