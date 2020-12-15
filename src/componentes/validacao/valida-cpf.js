function verificaCPFInvalidos(cpf){
  const invalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "00000000000",
  ]

  indiceNaoEncontrado = -1

  return invalidos.indexOf(cpf) === indiceNaoEncontrado
}

function somaNumerosCPF(cpf, totalDeDigitos, inicioPesos){
  let soma = 0
  for(let indice = 1; indice <= totalDeDigitos; indice++){
    soma += parseInt(cpf.substring(indice - 1, indice)) * (inicioPesos - indice)
  }
  return soma
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao ){
  const soma = somaNumerosCPF(cpf, totalDeDigitos, peso)
  let resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) resto = 0;
  return resto === digitoDeVerificacao
}

function verificaPrimeiroDigito(cpf){
  const peso = 11
  const totalDeDigitosPrimeiraParte = 9
  const digitoDeVerificacao = parseInt(cpf.substring(9,10))

  return verificaDigito(
    cpf,
    totalDeDigitosPrimeiraParte,
    peso,
    digitoDeVerificacao
  )
}

function verificaSegundoDigito(cpf){
  const peso = 12
  const totalDeDigitosPrimeiraParte = 10
  const digitoDeVerificacao = parseInt(cpf.substring(10,11))

  return verificaDigito(
    cpf,
    totalDeDigitosPrimeiraParte,
    peso,
    digitoDeVerificacao
  )
}

function validaCPF(cpf){
  return(
    verificaPrimeiroDigito(cpf)&&
    verificaSegundoDigito(cpf)&&
    verificaCPFInvalidos(cpf)
  )
}