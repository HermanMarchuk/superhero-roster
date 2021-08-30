Feature: Adding a hero to the roster

  Scenario: Adding a valid hero to the roster
    Given I logged in application
    When I add hero "hero" to the roster
    Then I should see hero "hero" in the roster

    Examples:
      | hero   |
      | Batman |
      | asdasd |
      | 123!@# |

  Scenario: Adding an invalid hero to the roster
    Given I logged in application
    When I add hero "" to the roster
    Then I shouldn't see hero "" in the roster
