@test @sucesso
Feature: Sucesso - Busca de produto

  Scenario Outline: Realizar Pesquisa - Produto encontrado
    Given que acesso o site da Advantageonlineshopping
    When pesquiso <pesquisa> na opcao de pesquisa
    Then os resultados <resultado> da pesquisa sao exibidos

    Examples:
      | pesquisa | resultado            |
      | hp pro   | HP Pro Tablet 608 G1 |

  Scenario Outline: Realizar Pesquisa - Produto NAO encontrado
    Given que acesso o site da Advantageonlineshopping
    When pesquiso <pesquisa> na opcao de pesquisa
    Then os resultados <resultado> da pesquisa sao exibidos

    Examples:
      | pesquisa | resultado               |
      | iphone   | No results for "iphone" |