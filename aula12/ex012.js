var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`BOM DIA, são ${hora} horas`)
} else if (hora < 18) {
    console.log(`BOA TARDE, são ${hora} horas`)
} else {
    console.log(`BOA NOITE, são ${hora} horas`)
}