const puppeteer = require('puppeteer');

const RESULT_WEBSITE = 'https://duresult.in/students/Combine_GradeCard.aspx';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(RESULT_WEBSITE);
  const [elementHandle] = await page.$('#imgCaptcha');
  const property = elementHandle.getProperties();
  await browser.close();
})();