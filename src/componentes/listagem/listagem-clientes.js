import { deletarCliente, listarClientes } from "../../../api/clientes.js";

const excluirCliente = id => {
  if(confirm("Deseja excluir o cliente?")){
    deletarCliente(id);
  }
  document.location.reload()
}

const exibeCliente = (cpf,nome,id) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <button type="button" class="btn btn-danger" onclick="excluirCliente(${id})">Excluir</button>
  <a href="componentes/edita/edita-clientes.html?id=${id}"><button type="button" class="btn btn-info">Editar</button></a>
  `
  linha.innerHTML = conteudoLinha;
  return linha;
};

const conteudoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then( dados => {
  dados.forEach(indice => {
    conteudoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  });
})


