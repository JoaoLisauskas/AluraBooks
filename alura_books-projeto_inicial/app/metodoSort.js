let btnvOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")
btnvOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}