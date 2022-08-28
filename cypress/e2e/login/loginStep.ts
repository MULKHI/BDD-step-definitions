/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from './loginPage'

Given('A user open loginpage', () => {
	LoginPage.visit()
})

When('A user submit login', () => {
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password')
	LoginPage.signIn()
})

Then('A user should see homepage', () => {
	LoginPage.ShowLoginResult()
})
