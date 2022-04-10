const d = new Date();
let dia = d.getDate();

console.log(dia);

$(".row").addClass("desablilitado")

switch (dia) {
    case 24: 
        $(".dia1").removeClass("desablilitado")
    break;
    case 25: 
        $(".dia2").removeClass("desablilitado")
    break;
    case 26:
        $(".dia3").removeClass("desablilitado") 
    break;
}
