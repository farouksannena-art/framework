const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

let r=reservations.filter(d =>d.statut="Confirmée" )
console.log(r);

let n=reservations.map(d => d.nom)
console.log(n);

let f=reservations.find(d => d.numero==103)
console.log(f)

let s=reservations.reduce((s,d) => d.statut=="Confirmée" ? s+d.montant  ,0)
console.log(s);

