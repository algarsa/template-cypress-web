@test @sucesso
Feature: Sucesso - Verificação de produto na tela de pagamento

  Scenario Outline: Verificar Produto na Tela de Pagamento
    Given que acesso o site da Advantageonlineshopping
    When seleciono e adiciono um produto no carrinho 
    And clico no botão ‘CHECKOUT’
    Then o produto <produto> deve ser exibido

    Examples:
      | produto                        |
      | HP S9500 BLUETOOTH WIRELESS... |