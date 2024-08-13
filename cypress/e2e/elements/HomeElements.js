class HomeElements {

    botaoLupa = () => {
        return '#menuSearch';
    };

    campoDeBusca = () => {
        return '[name="mobile_search"]';
    };

    resultadosEncontrados = (resultado) => {
        return resultado;
    };

    imagemSpeakers = () => {
        return '#speakersImg';
    };

    botaoByNow = () => {
        return 'button[name="buy_now"]';
    };

    botaoAddToCart = () => {
        return 'button[name="save_to_cart"]';
    };

    botaoCarrinho = () => {
        return '#shoppingCartLink';
    };

    produtosEncontrados = (produto) => {
        return produto;
    };

    botaoCheckOut = () => {
        return '#checkOutButton';
    };

}

export default HomeElements;