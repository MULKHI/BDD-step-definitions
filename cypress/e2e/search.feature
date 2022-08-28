Feature: Search data in application

    User want to Search data in homepage
    Scenario: Search suitable data
        Given A user open homepage
        When A user enter data in fill Search
        Then A user will get feedback from the result

# #User search results do not match
# Scenario: Search data that does not match
#     Given A user open homepage
#     When A user enter data in fill Search "Trading"
#     And A user click Enter in computer
#     Then A user will get feedback from the result "No results were found for the query: trading"