
const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://books.toscrape.com/');

  const result = await page.evaluate(() => {
    let data = []; // Create an empty array that will store our data
    let elements = document.querySelectorAll('.product_pod'); // Select all Products

    for (var element of elements) { // Loop through each proudct
      let title = element.childNodes[5].innerText; // Select the title
      let price = element.childNodes[7].children[0].innerText; // Select the price

      data.push({ title, price }); // Push an object with the data onto our array
    }

    return data; // Return our data array
  });

  browser.close();
  return result; // Return the data
};

scrape().then((value) => {
  console.log(value); // Success!
});

// https://www.indeed.com/jobs?q=junior+software+developer%2C+junior+software+engineer%2C+associate+software+developer%2C+associate+software+engineer&l=remote&jt=parttime&explvl=entry_level&fromage=1