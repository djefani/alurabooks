let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
   let livrosOrdenado = livros.sort((a, b) => a.preco - b.preco);
   exibirOsLivrosNaTela(livrosOrdenado);
}