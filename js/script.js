//alert("Olá Mundo")
//console.table("Só Quem é dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if( nome.value = ""){
        nome.style.border = "2px solid red" 
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur",exibirNome)// o addEventListener cria u evento para alguem elemento, no caso estamos usado o evento "blur", que é quando o foco sai de um campo

//nome.addEventListener("focus", function(){
//    nome.value = "Este campo não deve ficar vazio"
//})
