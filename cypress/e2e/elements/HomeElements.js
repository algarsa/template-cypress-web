class HomeElements {
    
    botaoAceitarCookies = () => {
        return '#adopt-accept-all-button'
    };
    
    linkPortalNegociosCorretor = () => {
        return 'a[href="https://wwwn.bradescoseguros.com.br/pnegocios2/wps/portal/portaldenegociosnovo"]';
    };

    tituloPortalNegociosCorretor = () => {
        return 'h2[class="titulo-portal"]';
    };

    botaoBuscar = () => {
        return '#btn_search';
    };

    campoDeBusca = () => {
        return '[placeholder="Digite aqui..."]';
    };

    botaoLupa = () => {
        return 'i[class="icon-nav-busca icon"]';
    };

    classeResultadosEncontrados = () => {
        return 'big[class="resultados-encontrados"]';
    };

    linkContratacaoOnline = () => {
        return 'a[title="Contratação online"]'
    }
}

export default HomeElements;