var idade = 60
if (idade < 16) {
    console.log(`Com ${idade} anos você é NÂO VOTA`)

} else if (18 > idade || idade >= 60) {
    console.log(`com ${idade} anos o voto é OPCIONAL`)

} else {
    console.log(`com ${idade} anos o voto é OBRIGATÓRIO`)
}