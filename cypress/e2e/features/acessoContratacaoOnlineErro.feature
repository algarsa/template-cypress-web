@test @erro
Feature: Erro - Contratacao Online

  Scenario: acesso contratacao online com erro
    Given que acesso o site da Bradesco Seguros
    When acesso contratacao online
    Then deve aparecer label contratacao online