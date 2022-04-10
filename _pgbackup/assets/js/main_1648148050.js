const d = new Date();
let dia = d.getDate();

console.log(dia);

switch (dia) {
    case 24: 
        console.log(`primeiro dia`);
        $(".dia1").addClass("desablilitado")
    break;
    case 25: 
        console.log(`primeiro dia`)
    break;
    case 26: 
        console.log(`primeiro dia`)
    break;
}
