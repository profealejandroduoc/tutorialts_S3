const personas=['Wacoldo','Diogenes','Wenceslao','Heroína']

console.log(personas[1]);

const [p1,p2,p3,p4] = personas
console.log(p2);
console.log(p1);
console.log(p4);
console.log(p3);

const [,,wence]=personas
console.log(wence);