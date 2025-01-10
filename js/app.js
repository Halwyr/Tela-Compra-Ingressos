// Função para exibir Pop-up
function mostrarPopup(mensagem) {
    document.getElementById('popup-message').textContent = mensagem;

    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.add('show');
    overlay.classList.add('show');
}

// Função para fechar Pop-up
function fecharPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.remove('show');
    overlay.classList.remove('show');
}

// Função para decrementar estoque de ingressos
function decrementarEstoque(tipo, quantidade) {
    const estoqueElemento = document.getElementById(`qtd-${tipo}`);
    let estoque = parseInt(estoqueElemento.textContent);

    if (quantidade > estoque) {
        mostrarPopup(`Quantidade indisponível para ${tipo}.`);
    } else {
        estoque -= quantidade;
        estoqueElemento.textContent = estoque;
        mostrarPopup('Compra realizada com sucesso');
    }
}

// Função para comprar ingressos
function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        mostrarPopup('Preencha o campo de quantidade corretamente.');
        return;
    }

    if (['pista', 'superior', 'inferior'].includes(tipo)) {
        decrementarEstoque(tipo, quantidade);
    } else {
        mostrarPopup('Tipo de ingresso inválido.');
    }
}
