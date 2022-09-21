# cypress-v10-cucumber-typescript-html-reporter
Cypress Automation framework for Typescript based apps using BDD-Gherkin style (Cucumber) 

## Purpose of the project
Cypress awesomness and its power can be enhanced if it is integerated with BDD (Cucumber) so that the tests can be written in natural language and test definitions can be written in Typescript. This project provides two different types of reporting features. with basic executable tests to demonstrate how Cypress  + Cucumber works hand in hand.

### Why cypress with BDD Framework
Cypress automation tests can be written directly in Typescript or Javascript and easy test case writing (written format can be understood by anyone). This project also provides buisness oriented reporting of tests in natural language that can be understood by different stakeholders (Devs + QAs + Buisness Persons).


## Installation
```
npm install @badeball/cypress-cucumber-preprocessor
```
```
npm install typescript
```
```
npm install @cypress/webpack-preprocessor
```
```
npm install ts-loader
```
```
npm install webpack
```
## Execute Tests
Run the Cypress Tests in headmode
```
npx cypress open
```
Or

Run the Cypress Test in headless mode
```
npx run cypress run --e2e
```
## Test Reports
This project provides two different types of reporting features.
- Command line output
- HTML Reporting using Cucumber

### Command line output
When tests are executed simply using "npx run cypress run --e2e", the command line prints the following output after the successfull execution of tests.

![Screenshot (311)](https://user-images.githubusercontent.com/80143004/191597604-3c1f2f09-77e9-4a87-bdff-8067e548c4ce.png)

### Cucumber HTML Test Report
```
node generate-cucumber-html-reporter.js
```

An HTML report is generated in the cypress/reports directory that gives the following output. 

![160298099-eb8ff357-3f09-4d60-ab86-9623c555be4a](https://user-images.githubusercontent.com/41230361/160299164-d87f95a8-750e-4d87-9021-67a91216b60b.jpg)

Report is generated using JSON + HTML and it is very useful if we want to integerate our project test results output with any system (e.g: configure the test with CI tool and generate the report using pipeline and email it to the user).

### Cypress Dashboard Report
Configure Cypress Dashboard with your project using instructions below.

- Go to [Cypress Dashboard](https://dashboard.cypress.io/login) & create account 
- Create a new project
- Copy the generated Project Id & Project key
- Configure the Project Id in cypress.json
  
  ![160297121-c27b0175-9983-4737-a46e-b5b3701961f7](https://user-images.githubusercontent.com/41230361/160299025-c95793d9-124d-405d-a01a-dbdbb0115ce7.jpg)

- Configure the Project key in package.json
  
  ![160297198-26444363-2721-44a6-8438-a421281c5d50](https://user-images.githubusercontent.com/41230361/160299050-af4441bb-bfcf-4698-9b97-1762f05bfe62.jpg)

Execute tests on Cypress Dashboard using
```
npm run cypress-dashboard
```
