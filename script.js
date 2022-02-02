// --------------01---------------//
let profile ={
    name:"Igor",
    lastname:"Bastos Alencar",
    yeardold:17,
    sing:"capricórnio",
}
console.log(profile)
//---------------02--------------//
profile.altura = 1.82
//---------------03-------------//
delete profile.sing
//---------------04-------------//
console.log(profile)
//---------------05,06,07----------------//
let cadastro =[
    {
        nome:"Eduardo",
        idade:18,
        telefone:12345-6789,
        amigos: ["Raissa","Jose","Emilly","Julia"],
    },
    {
        nome:"Raissa",
        idade:18,
        telefone:12345-6789,
        amigos: ["Eduardo","Jose","Emilly","Julia"],
    }, 
    {
        nome:"Jose",
        idade:18,
        telefone:12345-6789,
        amigos: ["Raissa","Eduardo","Emilly","Julia"],
    }, 
    {
        nome:"Emilly",
        idade:18,
        telefone:12345-6789,
        amigos: ["Raissa","Jose","Eduardo","Julia"],
    }, 
    {
        nome:"Julia",
        idade:18,
        telefone:12345-6789,
        amigos: ["Raissa","Jose","Emilly","Eduardo"],
    }
]
//-----------------08----------------//