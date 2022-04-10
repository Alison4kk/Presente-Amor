const d = new Date();
let dia = d.getDate();

console.log(dia);

$(".row").addClass("desablilitado")


switch (dia) {
    case 15: 
        $(".dia5").removeClass("desablilitado")

    case 14: 
        $(".dia4").removeClass("desablilitado")

    case 13:
        $(".dia3").removeClass("desablilitado") 
    
    case 12:
        $(".dia2").removeClass("desablilitado") 
    
    case 11:
        $(".dia1").removeClass("desablilitado") 
    break;
}