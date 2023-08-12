let tabela = document.querySelector("#tabela")

//async é uma forma que o JS tem de trasformar uma função sincrona em assicrona, muito ultilizada em APIs
async function carregarDados(){
   const url = "https://jsonplaceholder.org/users"

   const resultado = await fetch(url)
   console.log(resultado) //fecth irá fazer uma busca na url passada como parametro
   const dados = await resultado.json() //estamos convertendo todods os dados que estão vindo da api no formato json
  // console.log(dados)

  for (const item of dados) {
   // console.log(item.email)

   //CRIANDO ELEMENTOS HTML
   const linha = document.createElement("tr")
   const tdNome = document.createElement("td")
   const tdEmail = document.createElement("td")
   const tdTrabalho = document.createElement("td")
   const tdFone = document.createElement("td")

   //CRIANDO CONTEUDO NAS COLUNAS
   tdNome.textContent = item.firstname
   tdEmail.textContent = item.eamil
   tdTrabalho.textContent = item.company.bs
   tdFone.textContent = item.phone

   //ADICIONANDO OS ELEMENTOS EM SUA TAGS
   linha.appendChild(tdNome)
   linha.appendChild(tdEmail)
   linha.appendChild(tdTrabalho)
   linha.appendChild(tdFone)

   tabela.appendChild(linha)

  }
  
}

carregarDados()