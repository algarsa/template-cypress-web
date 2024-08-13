@test @sucesso
Feature: Sucesso - Inclusão de produto no carrinho

  Scenario Outline: Incluir produto no carrinho
    Given que acesso o site da Advantageonlineshopping
    When seleciono e adiciono o produto no carrinho
    Then o produto <produto> deve ser adicionado ao carrinho

    Examples:
      | produto                     |
      | HP S9500 BLUETOOTH WIRELESS |