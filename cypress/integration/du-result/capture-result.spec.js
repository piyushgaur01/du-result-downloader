/// <reference types="cypress" />
const tabletojson = require('tabletojson');
const fs = require('fs');

const RESULT_WEBSITE = 'https://duresult.in/students/Combine_GradeCard.aspx';
const startRoll = 19109827001;
const rollNumbers = [];
const maxResults = 149;
for (let index = 0; index <= maxResults; index++) {
  rollNumbers.push(startRoll + index);
}

const completeResult = [];

describe('Check Result', () => {
  rollNumbers.forEach((rollNo) => {
    it(`Should display result of ${rollNo}`, () => {
      cy.wait(1000);
      cy.visit(RESULT_WEBSITE);
      cy.get('#ddlcollege').select('109');
      cy.get('#txtrollno').type(rollNo, { delay: 10 });
      cy.get('#imgCaptcha').first().then((e) => {
        const captcha = e.attr('src').match(/(?<=\=)(.*?)(?=\&)/)[0].toString();
        cy.get('#txtcaptcha').type(captcha, { delay: 10 });
        cy.get('#btnsearch').click();
        cy.get('#lblname').then((e) => {
          const name = e.text();
          cy.get('#gvshow').then((e) => {
            const htmlTable = e.parent().html();
            const tablesAsJson = tabletojson.convert(htmlTable);
            completeResult.push({
              rollNo,
              name,
              result: tablesAsJson
            });
            cy.screenshot(rollNo.toString());
            cy.writeFile('./complete-result.json', completeResult);
          });
        });
      });
    });
  });
});