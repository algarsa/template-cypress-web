@test @sucesso
Feature: Sucesso - Pesquisa

  Scenario Outline: Realizar Pesquisa
    Given que acesso o site da Bradesco Seguros
    When pesquiso <pesquisa> na opcao de pesquisa
    Then os resultados da pesquisa sao exibidos

    Examples:
      | pesquisa |
      | sinistro |