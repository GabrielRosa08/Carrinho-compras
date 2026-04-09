let valorTotal;
limpar()

// precisa adicionar o produto no carrinho
function adicionar () {
    // recuperar os valores do produto(e valor),quantidade

    let produto = document.getElementById('produto').value;

    let nomeProduto = produto.split('-')[0]; //lembre eu delimitei onde esta o hifen, por isso ele nao pega o hifen.
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o subtotal
    let subtotal = quantidade * valorUnitario;

    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    
    // atualizar o valor total do carrinho
    valorTotal = valorTotal + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`; //textContent pq esta e a linha do paragrafo
    document.getElementById('quantidade').value = '1';

}
// limpar carrinho

function limpar () {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

