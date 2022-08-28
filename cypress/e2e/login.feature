Feature: Login to Application

    Scenario: login with valid user
        Given A user open loginpage
        When A user submit login
        Then A user should see homepage