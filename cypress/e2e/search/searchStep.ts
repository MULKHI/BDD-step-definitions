/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from './searchPage'

Given('A user open homepage', () => {
	SearchPage.visit()
})

When('A user enter data in fill Search', () => {
	SearchPage.fillSearch()
})

Then('A user will get feedback from the result', () => {
	SearchPage.ShowSearchResult()
})