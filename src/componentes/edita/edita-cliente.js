import { detalhaCliente } from "../../../api/clientes.js";

const url = new URL(window.location)

const id = url.searchParams.get("id") 

//console.log(id)

const inputCPF = document.querySelector('[data-cpf]')

const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then( dados => {
  inputCPF.value = dados[0].cpf
  inputNome.value = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
  const linha = document.createElement("div");
  const conteudoLinha = `
  <div class="alert alert-success text-center" role="alert">
    ${mensagem}
  </div>
  `
  linha.innerHTML = conteudoLinha;
  return linha;
}

const mensagemErro = (mensagem) => {
  const linha = document.createElement("div");
  const conteudoLinha = `
  <div class="alert alert-warning" role="alert">
    ${mensagem}
  </div>
  `
  linha.innerHTML = conteudoLinha;
  return linha;
}

formEdicao.addEventListener('submit', event => {
  event.preventDefault();

  if(!validaCPF(inputCPF.value)){
    alert("CPF Invalido!")
    
    return
  }

const alerta = document.querySelector('#alerta')

  editaCliente(id, inputNome.value, inputCPF.value).then( resposta => {
    if(resposta.status === 200){
      alerta.appendChild(mensagemSucesso(
        "Cliente alterado com sucesso!!"
      ))
    }else{
      alerta.appendChild(mensagemErro(
        "Houve um erro ao alterar o cliente"
      ))
    }
  })
})