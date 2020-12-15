import { cadastroClientes } from "../../../api/clientes.js";

const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', event => {
  event.preventDefault();
  const nome = event.target.querySelector('[data-nome]').value;
  const cpf = event.target.querySelector('[data-cpf]').value;

  if(validaCPF(cpf)){
    cadastroClientes(nome, cpf);
    document.location.href = "../../clientes.html"
  }else{
    alert("CPF Inválido")
  }
})
