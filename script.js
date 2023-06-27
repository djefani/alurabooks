async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepCovertida = await consultaCep.json();
    if (consultaCepCovertida.erro){
        throw Error('CEP não existente');
    }
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCepCovertida.localidade;
    bairro.value = consultaCepCovertida.bairro;
    logradouro.value = consultaCepCovertida.logradouro;
    estado.value = consultaCepCovertida.uf;

    console.log(consultaCepCovertida);
    return consultaCepCovertida;
} catch(erro){
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
    console.log(erro)
}
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
