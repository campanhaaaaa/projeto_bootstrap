//alert("Olá Mundo")
//console.table("Só Quem é dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if( nome.value == ""){
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

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if(idade.value >= 18){
        alert("Você possui mais de 18 anos")

    }
    else{
        alert("Infelizmente você não é de maior!")
        windom.location.href = "https://www.bing.com/ck/a?!&&p=c94e3b970a75fee4JmltdHM9MTY5MTM2NjQwMCZpZ3VpZD0zN2Q2OWM1Yy0zMzU1LTZhZTItMDQwNi04ZjRlMzJlNDZiNTYmaW5zaWQ9NTE3OQ&ptn=3&hsh=3&fclid=37d69c5c-3355-6ae2-0406-8f4e32e46b56&psq=jogos+online&u=a1aHR0cHM6Ly93d3cuY2xpY2tqb2dvcy5jb20uYnIv&ntb=1"
    }

})

let endereco = document.querySelector("input[name=endereco]")
endereco.addEventListener("blur",function(){
    console.log(endereco.value.length)
    if(endereco.value.length >= 35){
       
        endereco.style.border = "2px solid red" 
        alert("vc ultrapassou a quantitade de letra")
    }
    else{
        alert("ok")
        endereco.style.border = "2px solid yellow"
    }

})

let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")

email.addEventListener("keyup",function(){let minusculo = email.value.toLowerCase()
    confirmacao.value = email.value

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.') == -1){
        //Executar se for verdadeiro
        console.log("Email invalido")
        //email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.add("border-success")
    }
    else{
        //Executar se for falso
        console.log("Email válido")
        //email.style.border = "2px solid green"
        email.classList.add("border-success")
        email.classList.add("border-danger")
    }
    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")
// ()=>{} isto é uma arrow funtion, ou seja, uma versão resumida da função anonima

btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        //console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    }

    else{
        //console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")
        senha.setAttribute("type", "password")
    }
})

//PEGANDO DADOS DO CAMPO RADIO

let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click",(evento)=>{
    //console.log(evento)
    evento.preventDefault()// esta função irá inpedir o comportamento padrão do botão

    console.log(escolaridade[1])
})