const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];

destinations.forEach(e => {
    console.log(e.ville)
    
 });
 let t=destinations.map(d => d.ville)
 console.log(t);
 
 let f=destinations.filter(d => d<1500)
 console.log(f);

let x=destinations.find(d => d.id === 3);
console.log(x);

let r=destinations.indexOf(d => d.ville=="Tokyo");
console.log(r);

let s=destinations.some(d => d.disponible ="true");
console.log(s)

let v=destinations.every(d => d.prix >0)
console.log(s)

let c=destinations.reduce((s,d) => s+d.prix ,0);
console.log(c)